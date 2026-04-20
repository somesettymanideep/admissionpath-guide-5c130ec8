export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  course: string | null;
  source: string | null;
  notes: string | null;
  created_at: string;
}

const KEY = "leads_store_v1";

export const getLeads = (): Lead[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Lead[]) : [];
  } catch {
    return [];
  }
};

export const saveLeads = (leads: Lead[]) => {
  localStorage.setItem(KEY, JSON.stringify(leads));
};

export const addLead = (lead: Omit<Lead, "id" | "created_at">): Lead => {
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
  };
  leads.unshift(newLead);
  saveLeads(leads);
  return newLead;
};

export const addLeadsBulk = (items: Omit<Lead, "id" | "created_at">[]): number => {
  const leads = getLeads();
  const now = Date.now();
  const newOnes: Lead[] = items.map((l, i) => ({
    ...l,
    id: crypto.randomUUID(),
    created_at: new Date(now - i).toISOString(),
  }));
  saveLeads([...newOnes, ...leads]);
  return newOnes.length;
};

export const deleteLead = (id: string) => {
  saveLeads(getLeads().filter((l) => l.id !== id));
};
