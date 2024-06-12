// Copyright 2017-2024 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* default buttons, dark gray */
export const colorBtnDefault = '#101010';

export const colorBtnShadow = '#1a1a1a';

/* highlighted buttons, bright cyan */
export const colorBtnHighlight = '#00d9ff';

/* primary buttons, neon blue */
export const colorBtnPrimary = '#0088cc';

/* button text color */
export const colorBtnText = '#00e6e6';

export const colorLink = '#00d9ff';

export default `
  .theme--dark,
  .theme--light {
    a:not(.ui--Tab) {
      color: ${colorLink};

      &:hover,
      a:visited {
        color: ${colorLink};
      }
    }

    .ui--Button {
      &.isIcon:not(.isDisabled):not(.withoutLink):not(:hover) {
        .ui--Icon {
          color: ${colorLink};
        }
      }
    }

    .ui.modal > .header:not(.ui) {
      border-bottom-color: ${colorBtnDefault};
    }

    .ui.negative.button,
    .ui.buttons .negative.button {
      background: #666 !important;
    }
  }
`;
