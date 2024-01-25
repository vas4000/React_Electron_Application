//File: src/components/Sidebar/Category/Category.js
//this is seperate Category section component on sidebar

import Input from "../../components/Input";
import "./Category.css";


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Age Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="6 to 9"
          title="6 to 9"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="10 to 17"
          title="10 to 17"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
