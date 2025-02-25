import emailjs from "emailjs-com";

export const SendContactFormByMail = async (data) => {
    try {
        const result = await emailjs
            .send(
                "service_lny1kq4",
                "template_qel8eyf",
                {
                    from_name: data.name,
                    from_mail: data.email,
                    from_phone: data.phone,
                    message: data.message,
                },
                "Kux7_OETh9-kAW8Un"
            );

        return { state: "ok", detail: result };

    } catch (error) {
        console.error(error);
        return {
            state: "error",
            detail: error
        };
    }
};