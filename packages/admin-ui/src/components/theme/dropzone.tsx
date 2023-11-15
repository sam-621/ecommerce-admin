import { UploadCloudIcon } from 'lucide-react';
import { type DetailedHTMLProps, forwardRef, type InputHTMLAttributes } from 'react';

export const Dropzone = forwardRef<HTMLInputElement, Props>(function Dropzone({ ...rest }, ref) {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-input hover:border-ring border-dashed rounded-lg cursor-pointer  transition-colors"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
          <UploadCloudIcon width={24} />
          <p className="text-sm text-gray-500 dark:text-gray-400">Accepts .jpg and .png</p>
        </div>
        <input ref={ref} {...rest} id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
});

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
