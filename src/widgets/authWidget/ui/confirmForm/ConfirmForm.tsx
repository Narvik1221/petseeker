// src/entities/user/model/authWidget.ts
import React from "react";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import styles from "../auth.module.scss";
import InputMask from "react-input-mask-next";
import { codeConsts } from "../../../../shared/constants";
import { useTranslation } from 'react-i18next';
import { Form } from "../../../../shared/ui/form";
type ConfirmFormProps = {
  handleClickSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangeCode?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  code?: string;
  isSendingConfirm?: boolean;
  isSendingLogin?: boolean;
};
export const ConfirmForm: React.FC<ConfirmFormProps> = ({
  handleClickSubmit,
  handleClickConfirm,
  handleChangeCode,
  code,
  isSendingConfirm,
  isSendingLogin,
}) => {
  const { t } = useTranslation('confirmForm');
  return (
    <Form >
      <InputMask
        mask={codeConsts.mask}
        value={code}
        onChange={handleChangeCode}
        placeholder={codeConsts.placeholder}
        className={styles.code_mask}
      >
        <Input />
      </InputMask>
      <Button type="button" onClick={handleClickConfirm} disabled={isSendingConfirm}>
        {t('next')}
      </Button>
      <Button
        isDefault={true}
        type="button"
        onClick={handleClickSubmit}
        disabled={isSendingConfirm || isSendingLogin}
      >
        {t('sendCodeAgain')}
      </Button>
    </Form>
  );
};
