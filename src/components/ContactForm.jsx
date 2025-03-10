// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "./ui/textarea";
// import { useToast } from "./ui/use-toast";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   email: z.string().min(2, {
//     message: "Email invaild",
//   }),
//   message: z.string().min(2, {
//     message: "Message must be at least 2 characters",
//   }),
// });

// export function ContactForm() {
//   // ...
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });
//   const { toast } = useToast();

//   function onSubmit(values) {
//     fetch("/api/send", {
//       method: "POST",
//       body: JSON.stringify(values),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(async (res) => {
//         const data = await res.json();
//         console.log(data);
//         if (data?.id) {
//           toast({
//             title: "Message sent",
//             description: "Thank you for your message!",
//           });
//           form.reset();
//         }
//       })
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }
//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="grid sm:grid-cols-2 items-center gap-4 mt-10"
//       >
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input placeholder="Name" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input placeholder="Email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="sm:col-span-2">
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Textarea placeholder="Type your message here." {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <Button variant="outline" type="submit" size="sm">
//           Submit
//         </Button>
//       </form>
//     </Form>
//   );
// }


"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email format.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export function ContactForm() {
  const formRef = useRef();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    setLoading(true);

    emailjs
      .send(
        "service_et0pblq", // Replace with your EmailJS Service ID
        "template_3jiyzz2", // Replace with your EmailJS Template ID
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "SpYNe_Ke-Cu5rmRB4" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          toast({
            title: "Message sent",
            description: "Thank you for your message!",
          });
          form.reset(); // Reset form after success
          setLoading(false);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast({
            title: "Error",
            description: "Failed to send message. Try again later.",
            variant: "destructive",
          });
          setLoading(false);
        }
      );
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 items-center gap-4 mt-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="sm:col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant="outline" type="submit" size="sm" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
