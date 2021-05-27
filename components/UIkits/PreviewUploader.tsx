import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Button } from '.'
import { colorPallete } from '../../styles/ThemeConfig'

const PreviewUploader = (props) => {
  const [preview, setPreview] = useState(null)

  const handlePreviewChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setPreview(window.URL.createObjectURL(file))
    }
    event.target.value = null
  }

  const deletePreview = (e) => {
    setPreview(null)
  }

  return (
    <DIV>
      <label>
        {preview ? (
          <img src={preview} className="preview" />
        ) : (
          <span className="filelabel" title="Upload an image">
            <Image src="/v1621882353/AppGraphics/addImage_glvdmr.png" width={324} height={294} />
          </span>
        )}

        <input type="file" name="preview" className="previewInput" onChange={handlePreviewChange} />
      </label>

      <div className="buttonDiv">
        <label>
          {/* <Button label="Add" fullWidth /> */}
          <h3 className="button">Add</h3>
          <input type="file" name="preview" className="previewInput" onChange={handlePreviewChange} />
        </label>

        <Button label="Delete" secondary fullWidth onClick={deletePreview} />
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  .buttonDiv {
    margin: 46px 0;

    // Add Button
    > div:first-child {
      margin-bottom: 29px;
    }
  }

  .previewInput {
    display: none;
  }

  label {
    cursor: pointer;
  }

  .preview {
    width: 324px;
    height: 294px;
  }

  .button {
    width: 100%;
    height: 56px;
    line-height: 56px;
    text-align: center;
    background-color: ${colorPallete.burple};
    color: ${colorPallete.white};
    border-radius: 20px;
  }
`

export default PreviewUploader
