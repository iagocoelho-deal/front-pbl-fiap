import { call, put } from "redux-saga/effects";
import { Api } from "common/api";
import {
  registerSupplierSuccess,
  registerSupplierFailure,
  getSupplierListSuccess,
  getSupplierListFailure,
} from "./actions";
import { showToastr } from "store/toast/actions";

export function* registerSupplierRequest(action) {
  try {
    const { data } = yield call(
      Api.post,
      "/cadastraClienteFornecedor",
      action.payload.data
    );
    yield put(registerSupplierSuccess(data));
    yield put(
      showToastr({ type: "success", message: "Cadastrado feito com sucesso!" })
    );
  } catch (error) {
    yield put(
      showToastr({ type: "danger", message: "Falha ao cadastrar o fornecedor" })
    );
    yield put(registerSupplierFailure());
  }
}

export function* getSupplierListRequest() {
  try {
    const { data } = yield call(Api.get, "/clientefornecedor/all");

    yield put(getSupplierListSuccess(data));
  } catch (error) {
    yield put(getSupplierListFailure(error));
  }
}

export function* deleteSupplierRequest(action) {
  try {
    const { data } = yield call(
      Api.delete,
      "/cadastraClienteFornecedor",
      action.payload.id
    );

    yield put(
      showToastr({
        type: "success",
        message: "Fornecedor deletado com sucesso!",
      })
    );

    return Promise.resolve(data);
  } catch (error) {
    yield put(
      showToastr({
        type: "danger",
        message: "Falha ao deletar o fornecedor",
      })
    );
    return Promise.reject("Falha ao deletar");
  }
}
