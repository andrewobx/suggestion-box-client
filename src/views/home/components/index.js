import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import FormGroup from '../../../components/form/formGroup';
import ErrorText from '../../../components/form/error';
import Input from '../../../components/form/input';
import TextArea from '../../../components/form/textarea';
import Button from '../../../components/button';

export const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
  max-width: 650px;
  .section {
    margin: 3rem 0;
  }
  .bold {
    font-weight: bold;
  }
`;

export const Heading = styled.div`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const HeadingContainerSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SuggestionFeed = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 32px 0 32px 32px;
`;

export const SuggestionFeedIcon = styled.img`
  position: absolute;
  width: 22px;
  left: -12px;
  top: 8px;
  z-index: 1;
`;

export const SuggestionFeedItem = styled.li`
  position: relative;
  min-height: 60px;
  margin-bottom: 32px;
  padding-left: 30px;
  padding-bottom: 12px;
  border-left: 2px solid #ddd;
  :last-child {
    border-color: transparent;
  }
  :before {
    content: attr(data-date);
    display: flex;
    width: 120px;
    position: absolute;
    text-align: center;
    justify-content: center;
    align-items: center;
    left: -60px;
    top: -22px;
    font-size: 12px;
    color: #999;
  }
  ::after {
    content: attr(data-content);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: -21px;
    width: 40px;
    height: 40px;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: 50%;
    color: white;
    background-color: #0060a8 !important;
  }
  section {
    background-color: white;
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    cursor: pointer;
  }
  section:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .title {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  .description {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  .footer {
    font-size: 0.75rem;
    color: #888;
    line-height: 1.5;
  }
`;

export const SuggestionForm = props => (
  <Formik initialValues={{ title: '', description: '' }} {...props}>
    {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
      <FormGroup>
        {errors.genericError && <ErrorText>{errors.genericError}</ErrorText>}
        <Input
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange('title')}
          onBlur={handleBlur('title')}
          error={errors.title}
          value={values.title}
        />
        <TextArea
          id="description"
          name="description"
          placeholder="I suggest..."
          rows={4}
          onChange={handleChange('description')}
          onBlur={handleBlur('description')}
          error={errors.description}
          value={values.description}
        />
        <Button primary large onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </FormGroup>
    )}
  </Formik>
);
