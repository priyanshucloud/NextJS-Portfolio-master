import React, { Fragment, useState } from "react";
import axios from "axios";
import { FiMessageCircle } from "react-icons/fi";

const SendMail = () => {
  const [formData, setFormData] = useState({});
  const [sending, setSending] = useState(false);

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const { name, email, message, subject } = formData;

    if (!name || !email || !subject || !message) {
      return alert("Please Fill All Data");
    }

    setSending(true);
    axios
      .post("/api/mail/new", formData)
      .then((res) => {
        console.log(res.data);
        setSending(false);
        alert("Message Sended Successfully");
        setFormData({});
      })
      .catch((err) => {
        console.log(err);
        setSending(false);
        alert(err);
      });
  };

  return (
    <Fragment>
      <section id='getInTouch'>
        <div className='py-8 pt-4 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'>
          <h3 className='text-3xl font-bold text-center pb-8 flex justify-center items-center gap-3'>
            <span className='mr-3'>
              <FiMessageCircle />
            </span>
            Drop A Message
          </h3>

          <form action='' onSubmit={sendMessage}>
            <div className='flex flex-col gap-4 w-[90%] md:w-[35%] m-auto'>
              <input
                className='text-xl font-semibold rounded border border-red-500 px-2 py-1'
                id='name'
                name='name'
                onChange={collectData}
                placeholder='Your Good Name'
                value={formData.name || ""}
              />
              <input
                className='text-xl font-semibold rounded border border-red-500 px-2 py-1'
                id='email'
                name='email'
                onChange={collectData}
                placeholder='Your Email Address'
                value={formData.email || ""}
              />
              <input
                className='text-xl font-semibold rounded border border-red-500 px-2 py-1'
                id='subject'
                name='subject'
                onChange={collectData}
                placeholder='Subject for mail'
                value={formData.subject || ""}
              />

              <textarea
                className='text-xl font-semibold rounded border border-red-500 px-2 py-1'
                id='message'
                name='message'
                onChange={collectData}
                placeholder='Write Your Message'
                rows='3'
                value={formData.message || ""}
              />

              <button
                className='text-xl font-semibold rounded border border-red-500 hover:bg-red-500 px-2 py-1'
                disabled={sending}
                type='submit'
              >
                {sending ? "sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default SendMail;
