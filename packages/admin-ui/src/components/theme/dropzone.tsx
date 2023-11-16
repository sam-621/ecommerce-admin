'use client';

import { UploadCloudIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import {
  type DetailedHTMLProps,
  forwardRef,
  type InputHTMLAttributes,
  useRef,
  useState
} from 'react';

import { Button } from './button';

export const Dropzone = forwardRef<HTMLInputElement, Props>(function Dropzone({ ...rest }, ref) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const previewUrl = file ? URL.createObjectURL(file) : null;

  const handleRemove = () => {
    setFile(null);

    if (!inputRef.current) return;

    inputRef.current.value = '';
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-input hover:border-ring border-dashed rounded-lg cursor-pointer  transition-colors"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
          <UploadCloudIcon width={24} />
          <p className="text-sm text-gray-500 dark:text-gray-400">Accepts .jpg and .png</p>
        </div>
        <input
          ref={ref ?? inputRef}
          {...rest}
          onChange={e => e.target.files?.length && setFile(e.target.files[0])}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
      {previewUrl && (
        <div className="flex flex-col gap-3">
          <span>Upload:</span>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Image
                src={previewUrl}
                alt="Imagen subida"
                width={60}
                height={60}
                className="object-cover rounded-md"
              />
              <div>
                <p className="text-foreground text-sm font-medium">{file?.name}</p>
                <span className="text-muted-foreground text-sm font-normal ">
                  {(file?.size ?? 0) * 0.001} KB
                </span>
              </div>
            </div>
            <div>
              <Button
                onClick={handleRemove}
                variant={'ghost'}
                className="p-0 h-fit hover:bg-transparent"
              >
                <XIcon className="text-muted-foreground" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
