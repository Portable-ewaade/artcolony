import ActionButton from "@aio/components/ActionButton";
import Table from "@aio/components/Table";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useState } from "react";
import Modal from "@aio/components/Modal";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiSquareRemove } from "react-icons/ci";
import styles from "./dataTable.module.css";


const table_column_heading = [
  {
    key: "artist",
    heading: "Artist Name",
  },
  {
    key: "biography",
    heading: "Biography",
    icon: FaLongArrowAltDown,
  },
  {
    key: "preview-img",
    heading: "Preview Img",
  },
  {
    key: "meta-data",
    heading: "Meta data",
  },
  {
    key: "images",
    heading: "Images",
  },
  {
    key: "verified-artist",
    heading: "Verified Artist",
  },
  {
    key: "action-btn",
    heading: "",
  },
];

const table_data = [
  {
    id: 1,
    artist: {
      value: "James Curt",
    },
    biography: {
      value: " ipsum dolor sit amet consectetur adipisitationem tempora. Reprehenderit ",
    },
    "preview-img": {
      value: "/",
    },
    "meta-data": {
      value: "Basic Plan",
    },
    images: {
      value: "Basic Plan",
    },
    "verified-artist": {
      value: "Yes",
    },
    "action-btn": {
      component: () => (
        <ActionButton
          Icon={CiSquareRemove}
          inverse={true}
          onClick={() => {
            alert("Welcome to aio dashboard presentation");
          }}
        />
      ),
    },
  },
  {
    id: 2,
    artist: {
      value: "Michael John",
    },
    biography: {
      value: " Lorem ipsum dolor, sit amet consectetur Ro magni itaque non eveniet!",
    },
    "preview-img": {
      value: "/",
    },
    "meta-data": {
      value: "Basic Plan",
    },
    images: {
      value: "Basic Plan",
    },
    "verified-artist": {
      value: "No",
    },
    "action-btn": {
      component: () => (
        <ActionButton
          Icon={CiSquareRemove}
          inverse={true}
          onClick={() => {
            alert("Welcome to aio dashboard presentation");
          }}
        />
      ),
    },
  },
];

const DataTable = () => {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    //alert('closing');
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <Table
        mainHeading={"Artcolony Artist"}
        subHeading={"This is a table for all the artcolony artist"}
        headingRightItem={() => (
          <ActionButton
            onClick={openModal}
            label="Add New Artist"
            Icon={AiOutlinePlusCircle}
          />
        )}
        heading={table_column_heading}
        data={table_data}
      />
      <Modal
        isOpen={modal}
        heading={"Fill in the details"}
        onClose={handleClose}
        positiveText={"Save"}
        negativeText={"Cancel"}
      >
        <div className={styles["form"]}>
          <label>Artist name</label> <br />

          <input placeholder="Artist name" type="text" />

          <textarea placeholder="Bio" rows={7} cols={75} />

          <label>Upload preview image</label>

          <input placeholder="preview img" type="file" /> <br />

          <label>Meta data for preview image</label>  

          <input placeholder="Meta data" type="text" />

          <label>Upload gallery image</label>

          <input placeholder="gallery" type="file" /> <br />

          <label>Meta data for gallery image</label>

          <input placeholder="meta data" type="text" />

          <label>Verified artist Yes / No</label>

          <input placeholder="verified" type="text" />
        </div>

      </Modal>
    </>
  );
};

export default DataTable;
