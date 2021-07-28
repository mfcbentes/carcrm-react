import React from "react";
import { Typography, Modal, CircularProgress } from "@material-ui/core";
import { changeLoading } from "../../store/actions/Loading.action";
import { useSelector, useDispatch } from "react-redux";

export default function Loading() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.LoadingReducer);
  return (
    <Modal
      open={loading.open}
      onClose={() => dispatch(changeLoading({ open: false }))}
      className="d-flex justify-content-center align-itens-center h-100"
    >
      <div>
        <CircularProgress size={20} />
      </div>
    </Modal>
  );
}
