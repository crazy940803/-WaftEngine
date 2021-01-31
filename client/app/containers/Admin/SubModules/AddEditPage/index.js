import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import 'react-datepicker/dist/react-datepicker.css';

import BackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from '../reducer';
import saga from '../saga';
import {
  makeSelectOne,
  makeSelectLoading,
  makeSelectErrors,
} from '../selectors';
import * as mapDispatchToProps from '../actions';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import PageContent from '../../../../components/PageContent/PageContent';
import Loading from '../../../../components/Loading';
import { FaArrowLeft } from 'react-icons/fa';

const key = 'subModules';

const AddEdit = props => {
  const {
    clearErrors,
    loadOneRequest,
    match,
    one,
    classes,
    loading,
    errors,
    setOneValue,
    addEditRequest,
    push,
  } = props;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    clearErrors();
    if (match.params && match.params.id) {
      loadOneRequest(match.params.id);
    }
  }, []);

  const handleChange = name => event => {
    event.persist();
    if (name === 'value' && event.target.value < 0) {
      setOneValue({ key: name, value: 0 });
    } else {
      setOneValue({ key: name, value: event.target.value });
    }
  };

  const handleGoBack = () => {
    push('/admin/sub-modules');
  };

  const handleSave = () => {
    if (one.module_group === '') {
      props.setErrors({ key: 'module_group', value: 'This field is required' });
    } else {
      addEditRequest();
    }
  };

  const handleCheckedChange = name => event => {
    event.persist();
    setOneValue({ key: name, value: event.target.checked });
  };

  return loading && loading == true ? (
    <Loading />
  ) : (
    <>
      <div>
        <div className="flex justify-between my-3">
          <PageHeader>
            <span className="backbtn" onClick={handleGoBack}>
              <FaArrowLeft className="text-xl" />
            </span>
            {match && match.params && match.params.id
              ? 'Edit Sub Module'
              : 'Add Sub Module'}
          </PageHeader>
        </div>
          <PageContent>
            <div className="w-full md:w-1/2 pb-4">
              <label>Module Group</label>
              <input
                className="inputbox"
                id="grid-group"
                type="text"
                value={one.module_group}
                onChange={handleChange('module_group')}
              />
              <div className="error">{errors.module_group}</div>
            </div>

            <div className="w-full md:w-1/2 pb-4">
              <label>Order</label>
              <input
                className="inputbox"
                id="grid-value"
                type="text"
                value={one.order}
                onChange={handleChange('order')}
              />
              <div className="error">{errors.order}</div>
            </div>

            <div className="w-full md:w-1/2">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs mb-2"
                htmlFor="grid-country-code-2"
              >
                Description
            </label>
            <textarea
              className="inputbox"
              id="grid-description"
              type="text"
              value={one.description}
              onChange={handleChange('description')}
            />
            <div className="error">{errors.description}</div>
          </div>

          {/* <div className="w-full md:w-1/2 pb-4">
            <label>Module Group Main</label>
            <input
              className="inputbox"
              id="grid-group"
              type="text"
              value={one.module_group_main}
              onChange={handleChange('module_group_main')}
            />
            <div className="error">{errors.module_group_main}</div>
          </div> */}

          <button
            type="button"
            className="text-white py-2 px-4 rounded mt-4 bg-primary uppercase btn-theme"
            onClick={handleSave}
          >
            Save
          </button>
          </PageContent>
        </div>
      </>
    );
};

AddEdit.propTypes = {
  loadOneRequest: PropTypes.func.isRequired,
  addEditRequest: PropTypes.func.isRequired,
  setOneValue: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
  classes: PropTypes.object.isRequired,
  one: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  loading: makeSelectLoading(),
  errors: makeSelectErrors(),
});

const withConnect = connect(
  mapStateToProps,
  { ...mapDispatchToProps, push },
);

export default compose(
  withRouter,
  withConnect,
)(AddEdit);
