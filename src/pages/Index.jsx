import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Welcome to Sneaker Accounting</h1>
      <p className="text-xl mb-8">Track your sneaker side-hustle transactions with ease.</p>
      <Button asChild>
        <Link to="/transactions">Go to Transactions</Link>
      </Button>
    </div>
  );
};

export default Index;