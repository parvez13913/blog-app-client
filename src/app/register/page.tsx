import RegisterForm from "@/components/register-form";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-balance mb-3">
            Create your account
          </h1>
          <p className="text-muted-foreground text-lg">
            Start your journey with us today
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
