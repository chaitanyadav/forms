import React from 'react';

function ReportMasterForm() {
  return (
    <div>
      <h2>Report Master Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="formId">Form ID:</label>
          <input type="text" id="formId" />
        </div>
        <div className="form-group">
          <label htmlFor="formName">Form Name:</label>
          <input type="text" id="formName" />
        </div>
        <div>
          <button className="button">Add</button>
          <button className="button">Modify</button>
          <button className="button">View</button>
          <button className="button">Cancel</button>
          <button className="button">Exit</button>
          <button className="button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default ReportMasterForm;
