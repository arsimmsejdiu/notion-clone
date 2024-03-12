import { type DropzoneOptions } from 'react-dropzone';

export type InputProps = {
    width?: number;
    height?: number;
    className?: string;
    value?: File | string;
    onChange?: (file?: File) => void | Promise<void>;
    disabled?: boolean;
    dropzoneOptions?: Omit<DropzoneOptions, 'disabled'>;
  };