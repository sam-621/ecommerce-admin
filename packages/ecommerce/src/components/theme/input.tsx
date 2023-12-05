import { AlertCircleIcon } from 'lucide-react';
import { type FC, type InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const Input: FC<Props> = ({ error, type, label, className, name, setValue, ...rest }) => {
  return (
    <div className={`input-container w-full ${error && 'error'}`}>
      <div>
        <div className="h-64 relative w-full">
          <input
            id={name}
            type={type}
            // this do the magic do not remove
            placeholder=" "
            className={twMerge('form_input', className)}
            onChange={e => setValue(e.target.value)}
            {...rest}
          />
          <label htmlFor={name} className="form_label cursor-pointer">
            {label}
          </label>
        </div>
        {error && (
          <div className="hint flex gap-8 items-center mt-4 text-error-700">
            <AlertCircleIcon className="h-20" />
            <p className="small-font medium">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: InputTypes;
  label: string;
  name: string;
  setValue: (val: string) => void;
  error?: string;
};

export type InputTypes = 'text' | 'password' | 'email' | 'tel';
