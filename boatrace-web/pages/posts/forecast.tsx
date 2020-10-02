import React, { Component } from "react";
import clsx from 'clsx';
import ReactFileReader from 'react-file-reader';
import { makeStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function Forecast() {
  const state = {
    file : ""
  }

  const handleFiles = (files: Blob[]) => {
    var reader = new FileReader();
    reader.onload = function() {
        // csvデータ取得
        console.log(reader.result)
        alert(reader.result)
    }
    reader.readAsText(files[0]);
  }

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  }
   
    return(
      <div className="files">
        <p>結果予測</p>
        <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
            <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
            <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
            <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<StyledRadio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </div>
        <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        <iframe src={state.file} frameBorder="0" height="400" width="50%" />
      </div>
    )
  
}

// export default function Forecast() {
//   handleFiles = files => {
//           var reader = new FileReader();
//           reader.onload = function(e) {
//           // Use reader.result
//           alert(reader.result)
//           }
//         reader.readAsText(files[0]);
//     }
//   return (
//     <div>
//       <p>Forecast</p>
//       <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
//           <button className='btn'>Upload</button>
//     </ReactFileReader>
//     </div>
//   ) 
// }