import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { DeepMap } from "react-hook-form/dist/types/utils";
import { FieldError } from "react-hook-form";

type Props = {
  nomeCampo: string;
  nomeExibido: string;
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  setValue: Function;
  required: boolean;
};

const FileUploader = (props: Props) => {
  const [files, setFiles] = useState([]);

  const renderRiles = files.map(
    (file: { name: string | null | undefined; size: React.ReactNode }) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    )
  );

  const onDrop = (files: any) => {
    console.log("dropou", files);
    setFiles(files);
    props.setValue(props.nomeCampo, files[0]);
  };

  useEffect(() => {
    /*eslint-disable */
    props.register({ name: props.nomeCampo }, { required: props.required });
    //    if (props.wasReset) setCurrentValue(null);
    //}, [props.wasReset]);
  }, []);

  return (
    <div
      className={
        !props.errors[props.nomeCampo]
          ? "form-group flex-field"
          : "form-group flex-field has-danger"
      }
    >
      <label>{props.nomeExibido}</label>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="container" style={styles.dropzone}>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Clique ou arraste o arquivo para enviar</p>
            </div>
            <aside>
              <h4>{props.nomeExibido}</h4>
              <ul>{renderRiles}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default FileUploader;

const styles = {
  dropzone: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  },
};

// const {getRootProps, getInputProps} = useDropzone({
//   accept: 'image/*',
//   onDrop: acceptedFiles => {
//     setFiles(acceptedFiles.map(file => Object.assign(file, {
//       preview: URL.createObjectURL(file)
//     })));
//   }
// });

FileUploader.defaultProps = {
  required: true,
};
