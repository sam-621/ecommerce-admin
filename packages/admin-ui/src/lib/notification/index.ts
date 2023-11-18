import { type ReactNode } from 'react';
import { toast } from 'sonner';

/**
 * Notification module
 *
 * @example
 * import { notification } from '@lib/notification';
 *
 * // Display a success notification
 * notification.success('Hello World');
 *
 * // Display an error notification
 * notification.error('Hello World');
 *
 * // Dismiss a notification after 5 seconds
 * const id = notification.success('Hello World');
 *
 * setTimeout(() => {
 *  notification.dismiss(id);
 * }, 5000);
 *
 */
export const notification = {
  /**
   * Display a success notification with the provided message
   * @param msg message to display
   * @param description description to display
   * @returns notification id
   */
  success: (msg: string, description?: ReactNode) => {
    return toast.success(msg, { description });
  },

  /**
   * Display an error notification with the provided message
   * @param msg message to display
   * @returns notification id
   */
  error: (msg: string) => {
    return toast.error(msg);
  },

  /**
   * Dismiss a notification by the notification id provided
   * @param id notification id returned from other notification methods
   *
   * @example
   * const id = notification.success('Hello World');
   *
   * // Dismiss the notification after 5 seconds
   * setTimeout(() => {
   *  notification.dismiss(id);
   * }, 5000);
   *
   */
  dismiss: (id: string) => {
    toast.dismiss(id);
  }
};
