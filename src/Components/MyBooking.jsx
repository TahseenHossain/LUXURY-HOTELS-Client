const MyBooking = ({
  myBooking,
  handleDeleteBookings,
  handleUpdateBookings,
  index,
}) => {
  const { _id, Title, Date } = myBooking;

  const openUpdateModal = () => {
    document.getElementById(`update_modal_${index}`).showModal();
  };
  console.log('We are');
  return (
    <tr>
      <td className="py-2 px-4">{Title}</td>
      <td className="py-2 px-4">{Date}</td>
      <td className="py-2 px-4">
        <button
          className="btn text-[#E0B973]"
          onClick={() => document.getElementById("delete_modal").showModal()}
        >
          Delete
        </button>
        <dialog id="delete_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-[#E0B973]">LUXURY HOTELS</h3>
            <p className="py-4">Are You Sure?</p>
            <div className="modal-action  flex">
              <button
                className="btn text-[#E0B973]"
                onClick={() => {
                  handleDeleteBookings(_id);
                  document.getElementById("delete_modal").close();
                }}
              >
                Yes
              </button>
              <button
                className="btn text-[#E0B973]"
                onClick={() => document.getElementById("delete_modal").close()}
              >
                No
              </button>
            </div>
          </div>
        </dialog>
      </td>
      <td className="py-2 px-4">
        <button
          className="btn text-[#E0B973]"
          onClick={openUpdateModal}
        >
          Update
        </button>
        <dialog id={`update_modal_${index}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-[#E0B973]">LUXURY HOTELS</h3>
            <p className="py-4">Select New Date</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newDate = e.target.elements.newDate.value;
                handleUpdateBookings(_id, newDate);
                document.getElementById(`update_modal_${index}`).close();
              }}
            >
              <div className="form-control">
                <input
                  type="date"
                  name="newDate"
                  placeholder="Date"
                  className="input input-bordered bg-white w-48"
                  required
                />
              </div>
              <div className="modal-action flex">
                <button type="submit" className="btn text-[#E0B973]">
                  Update
                </button>
                <button
                  type="button"
                  className="btn text-[#E0B973]"
                  onClick={() =>
                    document.getElementById(`update_modal_${index}`).close()
                  }
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </td>
    </tr>
  );
};

export default MyBooking;
