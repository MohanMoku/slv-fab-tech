"use client";

import { useState } from "react";
import { toast } from "sonner";

type ContactFormProps = {
    contactForm: {
        title: string;
        submitButton: string;
        fields: {
            name: string;
            label: string;
            type: string;
            required?: boolean;
            options?: string[];
        }[];
    };
};

export default function ContactForm({ contactForm }: ContactFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [btnDissable, setBtnDissable] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        setBtnDissable(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (res.ok)
                toast.success("Form submitted successfully", {
                    description: "We will react You Soon.",
                    position: "top-center",
                    duration: 5000,
                    onAutoClose: () => {
                        setFormData({});
                        window.location.reload();
                    }
                });
        } catch (error) {
            toast.error("Serponse not submitted", {
                description: "Please Try Again later",
                duration: 500
            })
        } finally {
            setLoading(false)
            setTimeout(() => {
                setBtnDissable(false);
            }, 6000)
        }
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md my-10 w-full md:w-3/5">

            <h2 className="mb-6 text-2xl font-bold">
                {contactForm.title}, <span className="text-blue-600">We will reach you soon.</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {contactForm.fields.map((field) => (
                    <div key={field.name}>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            {field.label}
                            {field.required && (
                                <span className="ml-1 text-red-500">*</span>
                            )}
                        </label>

                        {field.type === "textarea" ? (
                            <textarea
                                name={field.name}
                                required={field.required}
                                rows={5}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                            />
                        ) : field.type === "select" ? (
                            <select
                                name={field.name}
                                required={field.required}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                            >
                                <option value="">Select Service</option>

                                {field.options?.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ) : field.type === "tel" ? (
                            <input
                                type="tel"
                                name={field.name}
                                required={field.required}
                                value={formData?.[field.name] || ""}
                                onChange={(e) => {
                                    let value = e.target.value;
                                    value = value.replace(/\D/g, "");
                                    if (value.length > 10) value = value.slice(0, 10);

                                    e.target.value = value;
                                    handleChange(e);
                                }}
                                minLength={10}
                                maxLength={10}
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                required={field.required}
                                value={formData?.[field.name] || ""}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                            />
                        )}
                    </div>
                ))}

                <button
                    disabled={btnDissable}
                    type="submit"
                    className={`w-full rounded-lg px-6 py-3 font-medium text-white transition ${btnDissable ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                    {btnDissable ? "Submitted..." : contactForm.submitButton}
                </button>
            </form>

            {
                loading && <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
                </div>
            }

        </div>
    );
}