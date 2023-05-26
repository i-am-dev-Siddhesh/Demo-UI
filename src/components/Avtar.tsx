"use client"
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

const Avtar = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      console.error('Please select a valid image file.');
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="relative">
          <div className="h-11 w-11 rounded-full bg-[#574EFA] absolute bottom-3 right-3 text-white font-bold text-3xl flex justify-center items-center cursor-pointer" onClick={handleButtonClick}>
            +
          </div>
          {selectedImage ? (
            <Image
              src={selectedImage}
              width={164}
              height={164}
              alt="Selected"
              className='rounded-full w-40 h-40'
            />
          ) : (
            <Image
              src="/vector.png"
              width={164}
              height={164}
              alt="Picture of the author"
              className='rounded-full w-40 h-40'
            />
          )}
          <button></button>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default Avtar;
