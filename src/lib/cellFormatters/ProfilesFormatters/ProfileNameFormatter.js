import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ProfileName = styled.p`
  text-align: right;
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
  
  &:hover {
    color: #00f;
  }
`;

const ProfileNameFormatter = ({value, id}) => {
    let {push} = useHistory()

    const handleClick = useCallback(() => {
        push(`/profile/${id}`);
    }, [id, push]);

    return <ProfileName onClick={handleClick}>{value}</ProfileName>
};

ProfileNameFormatter.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default ProfileNameFormatter;
