import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="gap-2 bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="gap-2 bg-danger bg-opacity-10 font-bold text-danger hover:bg-danger hover:bg-opacity-10">
        <CircleIcon className="fill-danger" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="gap-2 bg-white bg-opacity-10 font-bold text-white hover:bg-white hover:bg-opacity-10">
      <CircleIcon className="fill-white" size={10} />
      Investimento
    </Badge>
  );
}
