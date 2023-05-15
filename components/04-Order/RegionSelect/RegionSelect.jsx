import { css } from "@emotion/css";
import React from "react";

const RegionSelect = ({ regSelect, onChange }) => {
  const regItems = (regSelect) => {
    // console.log('=======SelectRegion==regItems=======');
    // console.log(regSelect);
    // console.log('====================================');
    return regSelect.map((reg) => (
      <option key={reg.id} value={JSON.stringify(reg)}>
        {reg.regionName}
      </option>
    ));
  };

  if (!regSelect) {
    return <span> </span>;
  }

  return (
    <div
      className={css`
        display: block;
        padding: 20px;
        width: 33%;
      `}
    >
      <label
        htmlFor="as-regions"
        className={css`
          max-width: 100%;
          margin-bottom: 5px;
          font-weight: 500;
          color: #c8c8c8;
          margin-right: 5px;
        `}
      >
        Район <span style={{color:"red"}}>*</span>
      </label>
      <select
        name="regions"
        id="as-regions"
        className="as-input as-regions"
        defaultValue=""
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" hidden>
          Виберіть район
        </option>
        {regItems(regSelect)}
      </select>
    </div>
  );
};

export default RegionSelect;

// export default class SelectRegion extends Component {

//   state = {
//     value: 'default',
//     regList: null
//   }

//   componentDidMount() {
//   }

//   componentWillMount() {
//     this.setState({regList: this.props.regSelect})
//     console.log('componentDidMount reglist');
//     console.log(this.state.regList);
//   }

//   regionChange = (event) => {
//     this.setState({ value: event.target.value });
//   }

//   renderItems(arr) {
//     console.log('===============renderItems==arr===================');
//     console.log(arr); //! undefined . Why?
//     console.log('====================================');
//     // if (!arr) return
//     return arr.map( ({id, region_name})=> {
//       return (
//         <option key={id}>{region_name} </option>
//       )
//     })
//   }

//   render() {
//     const {regList} = this.state
//     if (!regList) {   // ! костыль ? рендер срабатывает не дожидаясь пропсов?
//       return <span>Loading...</span>
//     }
//     const items = this.renderItems(regList)
//     console.log('=======SelectRegion - regList===========');
//     console.log(this.state.regList);
//     console.log('====================================');

//     return (
//       <div>
//         <select value={this.state.value} onChange={this.regionChange}>
//           <option value="default" disabled hidden>Виберіть район</option>
//           {items}
//         </select>
//       </div>
//     )
//   }
// }
