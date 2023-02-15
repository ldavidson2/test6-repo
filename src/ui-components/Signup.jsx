/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function Signup(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    companyName: "",
    companyEmail: "",
    companyNumber: "",
  };
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [companyEmail, setCompanyEmail] = React.useState(
    initialValues.companyEmail
  );
  const [companyNumber, setCompanyNumber] = React.useState(
    initialValues.companyNumber
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompanyName(initialValues.companyName);
    setCompanyEmail(initialValues.companyEmail);
    setCompanyNumber(initialValues.companyNumber);
    setErrors({});
  };
  const validations = {
    companyName: [],
    companyEmail: [],
    companyNumber: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          companyName,
          companyEmail,
          companyNumber,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Users(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "Signup")}
      {...rest}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName: value,
              companyEmail,
              companyNumber,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={companyEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              companyEmail: value,
              companyNumber,
            };
            const result = onChange(modelFields);
            value = result?.companyEmail ?? value;
          }
          if (errors.companyEmail?.hasError) {
            runValidationTasks("companyEmail", value);
          }
          setCompanyEmail(value);
        }}
        onBlur={() => runValidationTasks("companyEmail", companyEmail)}
        errorMessage={errors.companyEmail?.errorMessage}
        hasError={errors.companyEmail?.hasError}
        {...getOverrideProps(overrides, "companyEmail")}
      ></TextField>
      <TextField
        label="Phone Number"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={companyNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              companyName,
              companyEmail,
              companyNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.companyNumber ?? value;
          }
          if (errors.companyNumber?.hasError) {
            runValidationTasks("companyNumber", value);
          }
          setCompanyNumber(value);
        }}
        onBlur={() => runValidationTasks("companyNumber", companyNumber)}
        errorMessage={errors.companyNumber?.errorMessage}
        hasError={errors.companyNumber?.hasError}
        {...getOverrideProps(overrides, "companyNumber")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
