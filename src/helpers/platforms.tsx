import { CashApp } from '@/components/Icons/CashApp';
import { GoogleMeet } from '@/components/Icons/GoogleMeet';
import { PayPal } from '@/components/Icons/PayPal';
import { Venmo } from '@/components/Icons/Venmo';
import { Wise } from '@/components/Icons/Wise';
import { ReactNode } from 'react';

export const platforms = {
  'google-meet': {
    displayName: 'Google Meet',
    icon: <GoogleMeet />,
  },
  teams: {
    displayName: 'Teams',
    icon: <GoogleMeet />,
  },
};

type ProviderValues = {
  displayName: string;
  icon: ReactNode;
  id: string;
};

export interface PaymentProvidersProps {
  wise: ProviderValues;
  paypal: ProviderValues;
  cashapp: ProviderValues;
  venmo: ProviderValues;
}

export const paymentProviders: PaymentProvidersProps = {
  wise: {
    displayName: 'Wise',
    icon: <Wise />,
    id: '12sda2',
  },
  paypal: {
    displayName: 'PayPal',
    icon: <PayPal />,
    id: '45fs33',
  },
  cashapp: {
    displayName: 'Cash App',
    icon: <CashApp />,
    id: '8783ss2',
  },
  venmo: {
    displayName: 'Venmo',
    icon: <Venmo />,
    id: '5482ss2',
  },
};
