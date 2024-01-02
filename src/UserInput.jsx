function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
            <label htmlFor="">
              Initial Investment
            </label>
            <input type="number" />
        </div>
        <div>
            <label htmlFor="">
              Annual Investment
            </label>
            <input type="number" />
        </div>
      </div>
      <div className="input-group">
        <div>
            <label htmlFor="">
              Expected Return
            </label>
            <input type="number" />
        </div>
        <div>
            <label htmlFor="">
              Duration
            </label>
            <input type="number" />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
