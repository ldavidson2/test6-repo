/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersUpdateFormInputValues = {
    SK?: string;
    companyName?: string;
    companyNumber?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: number;
    specialty?: string;
    securityLevel?: number;
    clinicName?: string;
    dateOfBirth?: string;
    gender?: string;
    preferredContact?: string;
    dementiaLikelihood?: string;
    notes?: string;
    companyEmail?: string;
};
export declare type UsersUpdateFormValidationValues = {
    SK?: ValidationFunction<string>;
    companyName?: ValidationFunction<string>;
    companyNumber?: ValidationFunction<number>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<number>;
    specialty?: ValidationFunction<string>;
    securityLevel?: ValidationFunction<number>;
    clinicName?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    preferredContact?: ValidationFunction<string>;
    dementiaLikelihood?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    companyEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersUpdateFormOverridesProps = {
    UsersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SK?: PrimitiveOverrideProps<TextFieldProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    companyNumber?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    specialty?: PrimitiveOverrideProps<TextFieldProps>;
    securityLevel?: PrimitiveOverrideProps<TextFieldProps>;
    clinicName?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    preferredContact?: PrimitiveOverrideProps<TextFieldProps>;
    dementiaLikelihood?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    companyEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    users?: Users;
    onSubmit?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onSuccess?: (fields: UsersUpdateFormInputValues) => void;
    onError?: (fields: UsersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onValidate?: UsersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersUpdateForm(props: UsersUpdateFormProps): React.ReactElement;
