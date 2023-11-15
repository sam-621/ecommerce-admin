export const uploadImage = async (img: File) => {
  const formData = new FormData();

  formData.append('file', img);
  formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);

  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`;

  const res: UploadApiResponse = await fetch(url, {
    method: 'POST',
    body: formData
  }).then(async res => {
    return await res.json();
  });

  if (!res.secure_url) {
    console.log({
      res
    });

    return null;
  }

  return res.secure_url;
};

type UploadApiResponse = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  /**
   * Https image url
   */
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
};
