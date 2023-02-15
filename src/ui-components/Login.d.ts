/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoginInputValues = {
    companyEmail?: string;
    companyNumber?: number;
};
export declare type LoginValidationValues = {
    companyEmail?: ValidationFunction<string>;
    companyNumber?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    LoginGrid?: PrimitiveOverrideProps<GridProps>;
    companyEmail?: PrimitiveOverrideProps<TextFieldProps>;
    companyNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<{
    overrides?: LoginOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LoginInputValues) => LoginInputValues;
    onSuccess?: (fields: LoginInputValues) => void;
    onError?: (fields: LoginInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginInputValues) => LoginInputValues;
    onValidate?: LoginValidationValues;
} & React.CSSProperties>;
export default function Login(props: LoginProps): React.ReactElement;
