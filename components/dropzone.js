/* eslint-disable require-jsdoc */
import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import dropcloud from "../assets/dropcloud.png"
import Image from 'next/image';

const baseStyle = {
  flex: 1,
  display: 'flex',
  width:'80%',
  alignItems: 'center',
  padding: '70px',
  justifyItems: 'center',
  paddingLeft: '200px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function StyledDropzone() {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    
  } = useDropzone({accept: {'image/*': []}});

  

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <Image className="w-[5.625rem] mt-6 h-[5.625rem] " src={dropcloud} alt={"drag n drop image"} />
        <p className='text-sm text-center pt- text-[#ABABAF] '>Drag and drop or browse to choose file</p>
      </div>
    </div>
  );
}

