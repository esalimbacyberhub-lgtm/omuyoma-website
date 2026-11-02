export type Enquiry = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  receivedAt: string; // ISO timestamp
  origin: string;
};

export type ContactResponse =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Partial<Record<'name' | 'email' | 'phone' | 'message', string>> };
