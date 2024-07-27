"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ShoveeModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 25000);
  }, []);

  return (
    ''
  );
};

export default ShoveeModal;
