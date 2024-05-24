import React from 'react';
import { toast } from 'sonner';

const DEFAULT_DURATION = 4000;

export const toastSuccess = (
  message: React.ReactNode,
  duration = DEFAULT_DURATION,
) => toast(
  message, {
    duration,
  },
);

export const toastWarning = (
  message: React.ReactNode,
  duration = DEFAULT_DURATION,
) => toast(
  message, {
    duration,
  },
);
