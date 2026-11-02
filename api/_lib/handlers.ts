import { sendEnquiryEmail } from './email.js';
import type { Enquiry } from './types.js';

/**
 * A sink is one place an enquiry gets delivered. To also save enquiries to the office app's
 * database, write a `saveToOfficeApp(e: Enquiry)` function and append an entry below, e.g.
 *   { name: 'office-app', required: false, run: saveToOfficeApp }
 * `required: true` means the visitor sees an error if that sink fails; `false` means the
 * failure is logged but the enquiry still counts as received.
 */
export type Sink = { name: string; required: boolean; run: (e: Enquiry) => Promise<void> };

export const sinks: Sink[] = [
  { name: 'email', required: true, run: sendEnquiryEmail },
];

/** Runs every sink. Throws only if a required sink failed. */
export async function processEnquiry(enquiry: Enquiry): Promise<void> {
  const results = await Promise.allSettled(sinks.map((s) => s.run(enquiry)));
  let requiredFailed = false;
  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      console.error(`[contact] sink "${sinks[i].name}" failed:`, r.reason instanceof Error ? r.reason.message : 'unknown error');
      if (sinks[i].required) requiredFailed = true;
    }
  });
  if (requiredFailed) throw new Error('A required sink failed');
}
