import { useState, type FormEvent } from "react";

interface ContactFormState {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

export function useContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return { form, updateField, handleSubmit, submitted };
}
