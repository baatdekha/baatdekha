export function WorkerRegistrationCard() {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-3xl max-w-72 text-lg font-carter-one text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 ">
      <div>
        <span>If you are a worker, </span>
        <span>then Register now.</span>
      </div>

      <a
        href="https://forms.gle/PFtPoFPWoeNKJi167"
        className="p-2 bg-white rounded-2xl text-black text-center"
      >
        Click Here
      </a>
    </div>
  );
}
