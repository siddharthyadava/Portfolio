import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    // ---------- 1) SEND MESSAGE TO YOU ----------
    emailjs
      .sendForm(
        "service_825hh3c", // Your EmailJS Service ID
        "template_p6lnghl", // Your main template ID
        form,
        "o29AX9JbbD_qkfM4v" // Your public key
      )
      .then(() => {
        // ---------- 2) SEND AUTO-REPLY TO USER ----------
        emailjs.send(
          "service_825hh3c",           // same service
          "template_autoreply",        // NEW auto-reply template
          {
            from_name: form.from_name.value,
            from_email: form.from_email.value,
            subject: form.subject.value,
            message: form.message.value,
          },
          "o29AX9JbbD_qkfM4v"
        );

        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        form.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out — I’d love to hear from you.
          <br />
          Let’s connect, share ideas, and create something meaningful together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:siddharthyadav2904@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    siddharthyadav2904@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917800959838"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7800959838
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    New Delhi, Delhi
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/siddharth-yadava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/siddharthyadava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github />
                </a>
                <a
                  href="https://www.instagram.com/siddharth.yadava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* NAME */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="e.g., John Doe"
                />
              </div>

              {/* SUBJECT FIELD — ADDED */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Project Inquiry, Collaboration, Feedback..."
                />
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hey Siddharth, I’d like to collaborate on..."
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};
