'use client';
import { Transaction as TransactionType } from '@/types/meetings';
import { RenderContent } from './RenderContent';

export interface TransactionComponentProps {
  transaction: Omit<TransactionType, 'clientEmail' | 'clientName'>;
}

export const Transaction = ({ transaction }: TransactionComponentProps) => {
  return <RenderContent transaction={transaction} />;
};
