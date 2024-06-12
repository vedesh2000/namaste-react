const Contact = () => {
  const email = "vedeshkompella@gmail.com"; // Replace with your email
  const linkedInUrl = "www.linkedin.com/in/vedesh-kvs"; // Replace with your LinkedIn profile URL

  return (
    <div className="p-4 text-center font-bold bg-orange-100 dark:bg-slate-900 text-black dark:text-white">
      <h1>
        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
          Contact Me Via Email
        </a>
      </h1>
      <h1>
        <a href={linkedInUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn
        </a>
      </h1>
    </div>
  );
};

export default Contact;