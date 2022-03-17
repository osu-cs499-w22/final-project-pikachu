import React from "react";

const SettingsPage = ({ changeColor }) => {
  return (
    <div className='screen'>
      <select
        name='color'
        id='color'
        onChange={(e) => changeColor(e.target.value)}
      >
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='yellow'>Yellow</option>
      </select>
    </div>
  );
};

export default SettingsPage;
