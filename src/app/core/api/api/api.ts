export * from './budget.service';
import { BudgetService } from './budget.service';
export * from './category.service';
import { CategoryService } from './category.service';
export * from './transaction.service';
import { TransactionService } from './transaction.service';
export * from './wallet.service';
import { WalletService } from './wallet.service';
export const APIS = [BudgetService, CategoryService, TransactionService, WalletService];
