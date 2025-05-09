export default function useCopyToClipboard(variable: string) {
  navigator.clipboard.writeText(variable).then(() => {
      console.log('Copying to clipboard was successful!', variable);
    // useSweetAlert('success', 'Copied to clipboard', variable);
  }).catch(err => {
      console.error('Could not copy text: ', err);
    // useSweetAlert('error', 'Failed to copy', err);
  });
}
