export const QuackLogo = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 144}
        height={height || 33}
        fill={fill || "none"}
        viewBox="0 0 144 33"
      >
        <rect width="34" height="33" fill="#FCB11E" rx="16.5" />
        <rect width="11" height="11" x="23" y="22" fill="#FCB11E" rx="5.5" />
        <mask
          id="a"
          width="94"
          height="33"
          x="42"
          y="0"
          fill="#000"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M42 0h94v33H42z" />
          <path d="M55.466 30.182v-7.977h-.148c-.67 1.454-2.136 3.08-4.954 3.08-3.978 0-7.08-3.149-7.08-8.99 0-6 3.239-8.977 7.068-8.977 2.92 0 4.319 1.739 4.966 3.16h.205v-1.57c0-.886.477-1.364 1.363-1.364h2.046c.886 0 1.363.478 1.363 1.364v21.273c0 .886-.477 1.364-1.363 1.364H56.83c-.887 0-1.364-.478-1.364-1.364Zm-3.568-8.75c2.33 0 3.67-2.046 3.67-5.16 0-3.113-1.318-5.101-3.67-5.101-2.398 0-3.67 2.079-3.67 5.102 0 3.045 1.295 5.159 3.67 5.159Zm22.837-3.864V8.91c0-.886.477-1.364 1.364-1.364h2.113c.887 0 1.364.478 1.364 1.364v14.727c0 .887-.477 1.364-1.364 1.364h-1.92c-.886 0-1.364-.477-1.364-1.364V21.83h-.182c-.784 2.045-2.67 3.397-5.295 3.397-3.511 0-5.898-2.488-5.91-6.568V8.91c0-.886.478-1.364 1.365-1.364h2.113c.886 0 1.364.478 1.364 1.364v8.886c.011 2.057 1.193 3.341 3.023 3.341 1.738 0 3.34-1.227 3.329-3.568Zm13.05 7.761c-3.33 0-5.795-1.75-5.795-5.204 0-3.898 3.102-5.057 6.557-5.375 3.034-.296 4.227-.443 4.227-1.568v-.068c0-1.432-.943-2.262-2.59-2.262-1.194 0-2.046.398-2.58 1.023-.5.614-.887.966-1.66.898l-1.784-.148c-.966-.08-1.477-.716-1.056-1.59 1.113-2.32 3.602-3.717 7.102-3.717 3.886 0 7.409 1.75 7.409 5.91v10.408c0 .887-.477 1.364-1.364 1.364h-1.863c-.887 0-1.364-.432-1.364-1.216V22.58h-.136c-.853 1.625-2.523 2.75-5.103 2.75Zm1.387-3.34c2.125 0 3.636-1.398 3.636-3.228V16.91c-.58.387-2.307.637-3.364.784-1.704.239-2.83.91-2.83 2.273 0 1.33 1.07 2.023 2.558 2.023Zm19.445 3.352c-5.375 0-8.591-3.693-8.591-9 0-5.352 3.273-9.023 8.568-9.023 3.989 0 6.818 2.023 7.614 5.228.216.909-.33 1.454-1.262 1.454h-1.909c-.806 0-1.181-.398-1.534-1.148-.5-1.09-1.477-1.761-2.829-1.761-2.25 0-3.728 1.886-3.728 5.182 0 3.34 1.466 5.238 3.728 5.238 1.272 0 2.295-.625 2.829-1.761.353-.75.728-1.148 1.534-1.148h1.898c.932 0 1.477.477 1.307 1.284-.727 3.296-3.489 5.455-7.625 5.455Zm10.255-1.705V3.091c0-.886.477-1.364 1.363-1.364h2.114c.886 0 1.364.478 1.364 1.364v11.08h.261l4.932-5.853c.454-.545.954-.773 1.67-.773h2.341c1.182 0 1.534.773.773 1.67l-5.045 5.887 5.67 8.239c.636.92.25 1.659-.875 1.659h-2.602c-.728 0-1.239-.261-1.648-.875l-4.17-6.16-1.307 1.49v4.181c0 .887-.478 1.364-1.364 1.364h-2.114c-.886 0-1.363-.477-1.363-1.364Z" />
        </mask>
        <path
          fill="#FCB11E"
          d="M55.466 30.182v-7.977h-.148c-.67 1.454-2.136 3.08-4.954 3.08-3.978 0-7.08-3.149-7.08-8.99 0-6 3.239-8.977 7.068-8.977 2.92 0 4.319 1.739 4.966 3.16h.205v-1.57c0-.886.477-1.364 1.363-1.364h2.046c.886 0 1.363.478 1.363 1.364v21.273c0 .886-.477 1.364-1.363 1.364H56.83c-.887 0-1.364-.478-1.364-1.364Zm-3.568-8.75c2.33 0 3.67-2.046 3.67-5.16 0-3.113-1.318-5.101-3.67-5.101-2.398 0-3.67 2.079-3.67 5.102 0 3.045 1.295 5.159 3.67 5.159Zm22.837-3.864V8.91c0-.886.477-1.364 1.364-1.364h2.113c.887 0 1.364.478 1.364 1.364v14.727c0 .887-.477 1.364-1.364 1.364h-1.92c-.886 0-1.364-.477-1.364-1.364V21.83h-.182c-.784 2.045-2.67 3.397-5.295 3.397-3.511 0-5.898-2.488-5.91-6.568V8.91c0-.886.478-1.364 1.365-1.364h2.113c.886 0 1.364.478 1.364 1.364v8.886c.011 2.057 1.193 3.341 3.023 3.341 1.738 0 3.34-1.227 3.329-3.568Zm13.05 7.761c-3.33 0-5.795-1.75-5.795-5.204 0-3.898 3.102-5.057 6.557-5.375 3.034-.296 4.227-.443 4.227-1.568v-.068c0-1.432-.943-2.262-2.59-2.262-1.194 0-2.046.398-2.58 1.023-.5.614-.887.966-1.66.898l-1.784-.148c-.966-.08-1.477-.716-1.056-1.59 1.113-2.32 3.602-3.717 7.102-3.717 3.886 0 7.409 1.75 7.409 5.91v10.408c0 .887-.477 1.364-1.364 1.364h-1.863c-.887 0-1.364-.432-1.364-1.216V22.58h-.136c-.853 1.625-2.523 2.75-5.103 2.75Zm1.387-3.34c2.125 0 3.636-1.398 3.636-3.228V16.91c-.58.387-2.307.637-3.364.784-1.704.239-2.83.91-2.83 2.273 0 1.33 1.07 2.023 2.558 2.023Zm19.445 3.352c-5.375 0-8.591-3.693-8.591-9 0-5.352 3.273-9.023 8.568-9.023 3.989 0 6.818 2.023 7.614 5.228.216.909-.33 1.454-1.262 1.454h-1.909c-.806 0-1.181-.398-1.534-1.148-.5-1.09-1.477-1.761-2.829-1.761-2.25 0-3.728 1.886-3.728 5.182 0 3.34 1.466 5.238 3.728 5.238 1.272 0 2.295-.625 2.829-1.761.353-.75.728-1.148 1.534-1.148h1.898c.932 0 1.477.477 1.307 1.284-.727 3.296-3.489 5.455-7.625 5.455Zm10.255-1.705V3.091c0-.886.477-1.364 1.363-1.364h2.114c.886 0 1.364.478 1.364 1.364v11.08h.261l4.932-5.853c.454-.545.954-.773 1.67-.773h2.341c1.182 0 1.534.773.773 1.67l-5.045 5.887 5.67 8.239c.636.92.25 1.659-.875 1.659h-2.602c-.728 0-1.239-.261-1.648-.875l-4.17-6.16-1.307 1.49v4.181c0 .887-.478 1.364-1.364 1.364h-2.114c-.886 0-1.363-.477-1.363-1.364Z"
        />
        <path
          fill="#F2AE40"
          d="M55.466 22.204h1v-1h-1v1Zm-.148 0v-1h-.64l-.268.582.908.418Zm0-11.727-.91.415.267.585h.643v-1Zm.205 0v1h1v-1h-1Zm.943 19.705v-7.977h-2v7.977h2Zm-1-8.977h-.148v2h.148v-2Zm-1.056.58c-.55 1.196-1.713 2.5-4.046 2.5v2c3.303 0 5.072-1.948 5.862-3.662l-1.816-.837Zm-4.046 2.5c-1.708 0-3.192-.668-4.265-1.948-1.085-1.293-1.815-3.292-1.815-6.041h-2c0 3.09.822 5.586 2.282 7.327 1.472 1.754 3.528 2.661 5.798 2.661v-2Zm-6.08-7.99c0-2.824.761-4.816 1.855-6.085 1.087-1.26 2.57-1.892 4.213-1.892v-2c-2.186 0-4.237.857-5.727 2.586-1.483 1.72-2.34 4.216-2.34 7.392h2Zm6.068-7.977c2.404 0 3.512 1.38 4.056 2.574l1.82-.83c-.751-1.647-2.439-3.744-5.876-3.744v2Zm4.966 3.16h.205v-2h-.205v2Zm1.205-1v-1.57h-2v1.568h2Zm0-1.569c0-.134.018-.216.033-.26a.206.206 0 0 1 .023-.047l.008-.006a.206.206 0 0 1 .04-.017.814.814 0 0 1 .26-.034v-2c-.617 0-1.248.169-1.722.643s-.642 1.105-.642 1.721h2Zm.363-.364h2.046v-2h-2.046v2Zm2.046 0c.134 0 .216.019.26.034a.206.206 0 0 1 .047.023l.006.008c.003.005.01.018.017.039a.815.815 0 0 1 .033.26h2c0-.616-.168-1.247-.642-1.721s-1.105-.643-1.721-.643v2Zm.363.364v21.273h2V8.909h-2Zm0 21.273a.815.815 0 0 1-.033.26.207.207 0 0 1-.023.047l-.008.005a.207.207 0 0 1-.04.018.815.815 0 0 1-.26.034v2c.617 0 1.248-.169 1.722-.643s.642-1.105.642-1.721h-2Zm-.363.364H56.83v2h2.102v-2Zm-2.102 0a.816.816 0 0 1-.26-.034.205.205 0 0 1-.04-.018l-.008-.005-.005-.008a.207.207 0 0 1-.018-.04.815.815 0 0 1-.033-.26h-2c0 .617.168 1.248.642 1.722s1.105.642 1.722.642v-2Zm-4.932-8.114c1.501 0 2.721-.68 3.53-1.841.78-1.123 1.14-2.636 1.14-4.318h-2c0 1.43-.31 2.497-.782 3.176-.445.64-1.06.983-1.888.983v2Zm4.67-6.16c0-1.678-.352-3.181-1.135-4.293-.812-1.155-2.036-1.808-3.535-1.808v2c.852 0 1.464.34 1.9.958.464.66.77 1.71.77 3.144h2Zm-4.67-6.101c-1.534 0-2.757.686-3.558 1.85-.772 1.121-1.113 2.62-1.113 4.252h2c0-1.39.296-2.444.76-3.118.435-.631 1.047-.984 1.91-.984v-2Zm-4.67 6.102c0 1.646.347 3.155 1.118 4.285.8 1.17 2.02 1.874 3.552 1.874v-2c-.844 0-1.458-.354-1.9-1.002-.47-.688-.77-1.758-.77-3.157h-2Zm27.507 1.295h-1v.005l1-.005Zm.193 4.261h1v-1h-1v1Zm-.182 0v-1h-.687l-.246.643.933.357Zm-11.204-3.17h-1v.003l1-.003Zm4.84-.863h-1v.005l1-.005Zm7.353-.228V8.91h-2v8.66h2Zm0-8.659c0-.134.018-.216.034-.26a.206.206 0 0 1 .017-.04l.005-.007.008-.006a.2.2 0 0 1 .04-.017.815.815 0 0 1 .26-.034v-2c-.617 0-1.248.169-1.722.643s-.642 1.105-.642 1.721h2Zm.364-.364h2.113v-2H76.1v2Zm2.113 0c.134 0 .216.019.26.034a.2.2 0 0 1 .04.017l.007.006.006.008c.003.005.01.018.017.039a.812.812 0 0 1 .034.26h2c0-.616-.168-1.247-.642-1.721s-1.106-.643-1.722-.643v2Zm.364.364v14.727h2V8.91h-2Zm0 14.727a.813.813 0 0 1-.034.26.202.202 0 0 1-.017.04l-.006.008-.007.005a.202.202 0 0 1-.04.017.813.813 0 0 1-.26.034v2c.616 0 1.248-.168 1.722-.642s.642-1.105.642-1.722h-2Zm-.364.364h-1.92v2h1.92v-2Zm-1.92 0a.813.813 0 0 1-.26-.034.202.202 0 0 1-.04-.017l-.007-.006-.006-.007a.202.202 0 0 1-.017-.04.813.813 0 0 1-.034-.26h-2c0 .617.168 1.248.642 1.722.475.474 1.106.642 1.722.642v-2Zm-.364-.364V21.83h-2v1.806h2Zm-1-2.806h-.182v2h.182v-2Zm-1.115.642c-.626 1.631-2.122 2.755-4.362 2.755v2c3.01 0 5.287-1.58 6.23-4.04l-1.868-.715Zm-4.362 2.755c-1.508 0-2.703-.527-3.53-1.43-.834-.91-1.374-2.293-1.38-4.14l-2 .005c.007 2.232.665 4.133 1.905 5.486 1.248 1.363 3.002 2.08 5.005 2.08v-2Zm-4.91-5.568V8.91h-2v9.75h2Zm0-9.75c0-.134.02-.216.034-.26a.206.206 0 0 1 .023-.047l.008-.006a.206.206 0 0 1 .04-.017.814.814 0 0 1 .26-.034v-2c-.617 0-1.248.169-1.722.643s-.642 1.105-.642 1.721h2Zm.365-.364h2.113v-2h-2.114v2Zm2.113 0c.134 0 .216.019.26.034a.206.206 0 0 1 .04.017l.007.006.006.008a.2.2 0 0 1 .017.039.812.812 0 0 1 .034.26h2c0-.616-.168-1.247-.643-1.721-.474-.474-1.105-.643-1.72-.643v2Zm.364.364v8.886h2V8.91h-2Zm0 8.892c.007 1.215.361 2.308 1.09 3.109.737.811 1.772 1.226 2.933 1.226v-2c-.67 0-1.14-.227-1.454-.572-.323-.355-.565-.932-.57-1.774l-2 .011Zm4.023 4.335c1.101 0 2.196-.39 3.018-1.189.832-.809 1.318-1.972 1.311-3.384l-2 .01c.005.93-.305 1.55-.706 1.94-.41.4-.987.623-1.623.623v2Zm17.14-7.386.092.996h.006l-.097-.996Zm-.943-2.875-.76-.65-.007.01-.008.008.775.632Zm-1.659.898.088-.996h-.005l-.083.996Zm-1.784-.148.083-.997-.083.997Zm-1.056-1.59.9.432-.9-.433Zm9.92 11.544h1v-1h-1v1Zm-.136 0v-1h-.605l-.281.536.886.465Zm-.08-5.67h1v-1.868l-1.555 1.036.555.832Zm-3.364.784-.138-.99.138.99Zm-1.659 6.636c-1.5 0-2.698-.394-3.502-1.071-.78-.657-1.293-1.664-1.293-3.133h-2c0 1.985.72 3.58 2.005 4.663 1.261 1.061 2.962 1.541 4.79 1.541v-2Zm-4.795-4.204c0-1.629.62-2.577 1.543-3.201.996-.674 2.43-1.024 4.105-1.178l-.183-1.992c-1.78.164-3.623.553-5.043 1.513-1.491 1.01-2.422 2.589-2.422 4.858h2Zm5.654-4.38c1.468-.143 2.653-.26 3.456-.515.416-.131.853-.335 1.183-.7.358-.397.491-.874.491-1.348h-2c0 .088-.016.052.023.008.012-.012-.04.05-.3.134-.553.175-1.482.278-3.047.43l.194 1.991Zm5.13-2.563v-.068h-2v.068h2Zm0-.068c0-.947-.32-1.81-1.02-2.42-.679-.595-1.59-.842-2.57-.842v2c.667 0 1.05.168 1.254.347.185.161.336.43.336.915h2Zm-3.59-3.262c-1.426 0-2.58.484-3.34 1.373l1.52 1.3c.308-.36.858-.673 1.82-.673v-2Zm-3.356 1.391c-.246.302-.376.424-.473.483-.053.033-.125.068-.323.05l-.175 1.993c.574.05 1.082-.056 1.54-.336.414-.253.728-.614.982-.926l-1.55-1.264Zm-.801.533-1.784-.148-.165 1.994 1.784.147.165-1.993Zm-1.785-.148a.832.832 0 0 1-.283-.065c-.048-.023-.045-.034-.03-.01.02.027.026.057.026.066 0 .003-.001-.045.05-.152l-1.803-.866c-.324.674-.364 1.454.092 2.102.425.604 1.124.864 1.784.919l.164-1.994Zm-.237-.16c.901-1.877 2.966-3.15 6.2-3.15v-2c-3.764 0-6.677 1.522-8.003 4.283l1.803.866Zm6.2-3.15c1.814 0 3.443.411 4.589 1.214 1.1.771 1.82 1.944 1.82 3.695h2c0-2.407-1.04-4.19-2.672-5.333-1.588-1.112-3.663-1.576-5.736-1.576v2Zm6.41 4.91v10.408h2V13.227h-2Zm0 10.408a.816.816 0 0 1-.034.26.202.202 0 0 1-.017.04l-.006.008-.007.005a.207.207 0 0 1-.04.017.811.811 0 0 1-.26.034v2c.616 0 1.247-.168 1.722-.642.474-.474.642-1.105.642-1.722h-2ZM96.25 24h-1.863v2h1.863v-2Zm-1.863 0c-.295 0-.363-.072-.348-.059.008.007.009.012.004.002a.456.456 0 0 1-.02-.159h-2c0 .6.19 1.206.683 1.647.475.425 1.089.569 1.68.569v-2Zm-.364-.216V22.58h-2v1.204h2Zm-1-2.204h-.136v2h.136v-2Zm-1.022.535c-.662 1.263-1.97 2.215-4.217 2.215v2c2.913 0 4.946-1.299 5.988-3.286l-1.771-.929Zm-2.83.874c2.574 0 4.636-1.748 4.636-4.228h-2c0 1.18-.96 2.228-2.636 2.228v2Zm4.636-4.228V16.91h-2v1.852h2Zm-1.555-2.684-.025.014a.978.978 0 0 1-.075.035 2.828 2.828 0 0 1-.26.092 8.48 8.48 0 0 1-.787.193 30.68 30.68 0 0 1-1.8.292l.277 1.98a32.65 32.65 0 0 0 1.921-.312c.335-.069.674-.148.977-.241.285-.088.614-.21.882-.389l-1.11-1.664Zm-2.947.626c-.926.13-1.825.39-2.513.902-.739.55-1.178 1.352-1.178 2.36h2c0-.354.123-.57.373-.755.3-.224.816-.418 1.595-.527l-.277-1.98Zm-3.691 3.263c0 .967.405 1.774 1.12 2.31.68.51 1.554.713 2.437.713v-2c-.606 0-1.01-.143-1.237-.313-.191-.144-.32-.348-.32-.71h-2Zm30.593-7.42.973-.232-.003-.01-.97.242Zm-4.705.306-.909.417.004.008.905-.425Zm0 6.898.905.425-.905-.425Zm4.739.136.976.216.002-.009-.978-.207Zm-7.625 4.455c-2.448 0-4.317-.834-5.579-2.191-1.271-1.366-2.012-3.355-2.012-5.81h-2c0 2.854.867 5.365 2.548 7.172 1.689 1.816 4.115 2.829 7.043 2.829v-2Zm-7.591-8c0-2.474.754-4.47 2.03-5.836 1.268-1.36 3.132-2.187 5.538-2.187v-2c-2.889 0-5.309 1.008-7.001 2.822-1.685 1.806-2.567 4.322-2.567 7.2h2Zm7.568-8.023c3.629 0 5.981 1.8 6.643 4.468l1.941-.481c-.928-3.741-4.235-5.987-8.584-5.987v2Zm6.641 4.459a.47.47 0 0 1 .017.186c-.002.008 0-.005.014-.02.024-.027-.03.057-.32.057v2c.643 0 1.327-.188 1.804-.716.499-.553.594-1.281.431-1.97l-1.946.463Zm-.289.223h-1.909v2h1.909v-2Zm-1.909 0c-.222 0-.281-.048-.308-.07-.061-.05-.164-.17-.321-.503l-1.81.85c.196.418.456.87.873 1.208.45.364.982.515 1.566.515v-2Zm-.625-.564c-.664-1.45-1.998-2.345-3.738-2.345v2c.964 0 1.584.445 1.92 1.178l1.818-.833Zm-3.738-2.345c-1.439 0-2.671.62-3.513 1.762-.817 1.11-1.215 2.638-1.215 4.42h2c0-1.514.342-2.577.826-3.234.459-.624 1.09-.948 1.902-.948v-2Zm-4.728 6.182c0 1.8.393 3.341 1.208 4.46.84 1.155 2.074 1.778 3.52 1.778v-2c-.816 0-1.445-.325-1.903-.954-.484-.666-.825-1.743-.825-3.284h-2Zm4.728 6.238c1.642 0 3.028-.833 3.734-2.336l-1.81-.85c-.362.77-1.021 1.186-1.924 1.186v2Zm3.734-2.336c.157-.332.26-.454.321-.503.027-.021.086-.07.308-.07v-2c-.584 0-1.116.15-1.566.516-.417.337-.677.79-.873 1.207l1.81.85Zm.629-.573h1.898v-2h-1.898v2Zm1.898 0c.15 0 .254.02.317.04.062.02.073.036.061.024a.15.15 0 0 1-.039-.066c-.005-.018.006.002-.01.08l1.956.413c.143-.676 0-1.373-.529-1.876-.485-.46-1.144-.615-1.756-.615v2Zm.33.069c-.314 1.423-1.056 2.571-2.148 3.372-1.098.805-2.606 1.298-4.5 1.298v2c2.242 0 4.183-.587 5.682-1.685 1.504-1.103 2.506-2.681 2.919-4.554l-1.953-.431Zm8.448-5.5h-1v1h1v-1Zm.261 0v1h.465l.3-.356-.765-.644Zm4.932-5.853.765.645.003-.005-.768-.64Zm4.784.898.759.65.004-.003-.763-.647Zm-5.045 5.886-.76-.65-.5.584.436.633.824-.567Zm5.67 8.239-.824.567.001.002.823-.57Zm-5.125.784.832-.555-.004-.006-.828.561Zm-4.17-6.16.828-.56-.726-1.072-.854.973.752.66Zm-1.307 1.49-.752-.66-.248.283v.377h1Zm-3.841 4.181V3.091h-2v20.545h2Zm0-20.545c0-.134.018-.216.033-.26a.203.203 0 0 1 .018-.04l.005-.007.008-.006a.217.217 0 0 1 .039-.017.818.818 0 0 1 .26-.034v-2c-.616 0-1.247.168-1.721.643-.474.474-.642 1.105-.642 1.72h2Zm.363-.364h2.114v-2h-2.114v2Zm2.114 0c.134 0 .216.019.26.034a.205.205 0 0 1 .04.017.03.03 0 0 1 .007.006l.006.007c.003.006.01.018.017.04a.817.817 0 0 1 .034.26h2c0-.616-.168-1.247-.643-1.721-.474-.475-1.105-.643-1.721-.643v2Zm.364.364v11.08h2V3.09h-2Zm1 12.08h.261v-2h-.261v2Zm1.026-.356 4.932-5.852-1.53-1.29-4.932 5.853 1.53 1.289Zm4.935-5.857c.153-.183.278-.272.388-.322.11-.051.264-.09.514-.09v-2c-.465 0-.919.074-1.351.273-.434.2-.786.497-1.087.859l1.536 1.28Zm.902-.413h2.341v-2h-2.341v2Zm2.341 0c.094 0 .166.008.219.018.052.01.08.021.089.025.008.004-.005 0-.028-.022a.329.329 0 0 1-.073-.104.37.37 0 0 1-.031-.122c-.002-.03.003-.043.001-.033a.457.457 0 0 1-.039.085 1.212 1.212 0 0 1-.128.177l1.526 1.294c.477-.564.871-1.404.488-2.237-.385-.836-1.282-1.08-2.024-1.08v2Zm.014.02-5.046 5.886 1.519 1.302 5.045-5.886-1.518-1.302Zm-5.11 7.104 5.67 8.239 1.648-1.134-5.671-8.239-1.647 1.134Zm5.671 8.24c.049.071.081.13.1.174a.4.4 0 0 1 .029.082c.001.01-.001.002.002-.022a.284.284 0 0 1 .089-.17c.017-.016.026-.018.016-.014a.38.38 0 0 1-.086.025 1.11 1.11 0 0 1-.202.016v2c.733 0 1.576-.244 1.983-1.019.408-.775.131-1.607-.285-2.209l-1.646 1.138Zm-.052.091h-2.602v2h2.602v-2Zm-2.602 0c-.242 0-.383-.043-.478-.092-.093-.05-.206-.14-.338-.338l-1.664 1.11c.277.415.624.762 1.071.997.445.235.923.323 1.409.323v-2Zm-.82-.436-4.17-6.159-1.656 1.122 4.17 6.159 1.656-1.122Zm-5.75-6.258-1.307 1.489 1.503 1.32 1.307-1.49-1.503-1.319Zm-1.555 2.148v4.182h2v-4.181h-2Zm0 4.182a.817.817 0 0 1-.034.26c-.007.022-.014.034-.017.04l-.006.008-.007.005a.207.207 0 0 1-.04.017.81.81 0 0 1-.26.034v2c.616 0 1.247-.168 1.721-.642.475-.474.643-1.105.643-1.722h-2Zm-.364.364h-2.114v2h2.114v-2Zm-2.114 0a.816.816 0 0 1-.26-.034.22.22 0 0 1-.039-.017c-.006-.003-.007-.005-.008-.006l-.005-.007a.199.199 0 0 1-.018-.04.826.826 0 0 1-.033-.26h-2c0 .617.168 1.248.642 1.722s1.105.642 1.721.642v-2Z"
          mask="url(#a)"
        />
      </svg>
    </>
  );
};

export const QuackIconHome = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 30}
        height={height || 30}
        fill={fill || "none"}
        viewBox="0 0 30 30"
      >
        <path
          stroke={strokeColor || "#000"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 2}
          d="M3.75 15.948c0-1.27 0-1.906.148-2.502a5 5 0 0 1 .642-1.488c.33-.517.793-.953 1.717-1.826l3.25-3.07c1.933-1.825 2.9-2.738 4.002-3.082a5 5 0 0 1 2.982 0c1.102.344 2.069 1.257 4.002 3.083l3.25 3.07c.924.872 1.386 1.308 1.717 1.825a5 5 0 0 1 .642 1.488c.148.596.148 1.231.148 2.502v4.469c0 1.356 0 2.034-.15 2.59a4.375 4.375 0 0 1-3.093 3.094c-.556.149-1.234.149-2.59.149-.388 0-.582 0-.74-.043a1.25 1.25 0 0 1-.884-.884c-.043-.158-.043-.352-.043-.74V21.25c0-.58 0-.871-.038-1.114a3.125 3.125 0 0 0-2.598-2.598C15.87 17.5 15.58 17.5 15 17.5c-.58 0-.87 0-1.114.038a3.125 3.125 0 0 0-2.597 2.598c-.039.243-.039.533-.039 1.114v3.333c0 .388 0 .582-.043.74a1.25 1.25 0 0 1-.884.884c-.158.043-.352.043-.74.043-1.356 0-2.034 0-2.59-.15a4.375 4.375 0 0 1-3.094-3.093c-.149-.556-.149-1.234-.149-2.59v-4.469Z"
        />
      </svg>
    </>
  );
};

export const QuackIconProfile = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 30}
        height={height || 30}
        fill={fill || "none"}
        viewBox="0 0 30 30"
      >
        <path
          stroke={strokeColor || "#000"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 2}
          d="M6 26.25a9 9 0 0 1 18 0H6Zm9-10.125c-3.73 0-6.75-3.02-6.75-6.75s3.02-6.75 6.75-6.75 6.75 3.02 6.75 6.75-3.02 6.75-6.75 6.75Z"
        />
      </svg>
    </>
  );
};

export const QuackIconSearch = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 30}
        height={height || 30}
        fill={fill || "none"}
        viewBox="0 0 30 30"
      >
        <path
          stroke={strokeColor || "#000"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 2}
          d="m26.25 26.25-4.362-4.362m0 0A10.591 10.591 0 0 0 25 14.375C25 8.507 20.243 3.75 14.375 3.75S3.75 8.507 3.75 14.375 8.507 25 14.375 25c2.934 0 5.59-1.19 7.513-3.112Z"
        />
      </svg>
    </>
  );
};

export const QuackIconBookmark = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 30}
        height={height || 30}
        fill={fill || "none"}
        viewBox="0 0 30 30"
      >
        <path
          stroke={strokeColor || "#000"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 2}
          d="M1.25 10.25c0-2.327 0-3.49.306-4.431a6.25 6.25 0 0 1 4.013-4.013C6.51 1.5 7.673 1.5 10 1.5s3.49 0 4.431.306a6.25 6.25 0 0 1 4.013 4.013c.306.941.306 2.104.306 4.431V26.5l-2.242-1.922c-2.31-1.98-3.465-2.97-4.76-3.347a6.25 6.25 0 0 0-3.496 0c-1.295.377-2.45 1.367-4.76 3.347L1.25 26.5V10.25Z"
        />
      </svg>
    </>
  );
};

export const QuackIconNotifications = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 30}
        height={height || 30}
        fill={fill || "none"}
        viewBox="0 0 30 30"
      >
        <path
          stroke={strokeColor || "#000"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 2}
          d="M11.448 22.154a74.328 74.328 0 0 1-4.666-.37 1.984 1.984 0 0 1-1.663-2.6c.202-.607.406-1.204.46-1.848l.443-5.325a9.009 9.009 0 0 1 17.956 0l.444 5.328c.054.643.258 1.24.46 1.848a1.984 1.984 0 0 1-1.664 2.597 74.376 74.376 0 0 1-4.665.37m-7.105 0c2.367.114 4.738.114 7.105 0m-7.105 0v.543a3.553 3.553 0 1 0 7.105 0v-.543"
        />
      </svg>
    </>
  );
};

export const QuackIconComment = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 18}
        height={height || 18}
        fill={fill || "none"}
        viewBox="0 0 18 18"
      >
        <path
          stroke={strokeColor || "#5B7083"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 1.5}
          d="M1.88 6.81c0-1.596 0-2.394.311-3.004a2.85 2.85 0 0 1 1.246-1.245c.61-.311 1.407-.311 3.004-.311h5.13c1.595 0 2.393 0 3.003.31.536.274.972.71 1.245 1.246.31.61.31 1.408.31 3.004v3.42c0 .529 0 .793-.034 1.015a2.85 2.85 0 0 1-2.37 2.369c-.427.068-.861.001-1.29.041a1.425 1.425 0 0 0-.923.462c-.251.277-.459.602-.683.9-.618.826-.928 1.239-1.307 1.386-.332.13-.701.13-1.033 0-.38-.147-.69-.56-1.308-1.386-.224-.298-.431-.623-.682-.9a1.43 1.43 0 0 0-.924-.462c-.428-.04-.863.027-1.29-.041a2.85 2.85 0 0 1-2.37-2.369c-.034-.221-.034-.486-.034-1.015V6.81Z"
        />
      </svg>
    </>
  );
};

export const QuackIconRecast = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 18}
        height={height || 18}
        fill={fill || "none"}
        viewBox="0 0 18 18"
      >
        <path
          stroke={strokeColor || "#5B7083"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinecap || "round"}
          stroke-width={strokeWidth || 1.5}
          d="M9.5 1.5a11.451 11.451 0 0 1 2.19 2.082c.04.05.06.11.06.17M9.5 6a11.451 11.451 0 0 0 2.19-2.082.267.267 0 0 0 .06-.167M9.5 12a11.45 11.45 0 0 0-2.19 2.082.267.267 0 0 0-.06.167M9.5 16.5a11.45 11.45 0 0 1-2.19-2.082.267.267 0 0 1-.06-.17m4.5-10.497L11 3.75H8c-1.396 0-2.094 0-2.659.184A3.75 3.75 0 0 0 2.934 6.34C2.75 6.906 2.75 7.604 2.75 9s0 2.094.184 2.659A3.75 3.75 0 0 0 4.25 13.5m3 .749.75.001h3c1.396 0 2.094 0 2.659-.184a3.75 3.75 0 0 0 2.408-2.407c.183-.565.183-1.263.183-2.659s0-2.094-.183-2.659A3.75 3.75 0 0 0 14.75 4.5"
        />
      </svg>
    </>
  );
};

export const QuackIconLike = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 18}
        height={height || 18}
        fill={fill || "none"}
        viewBox="0 0 18 18"
      >
        <path
          stroke={strokeColor || "#5B7083"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 1.5}
          d="M9.5 16.41c.75 0 7.5-3.768 7.5-9.043 0-4.078-5.128-6.212-7.5-2.637C7.124 1.15 2 3.286 2 7.367c0 5.275 6.75 9.042 7.5 9.042Z"
        />
      </svg>
    </>
  );
};

export const QuackIconShare = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 18}
        height={height || 18}
        fill={fill || "none"}
        viewBox="0 0 18 18"
      >
        <path
          stroke={strokeColor || "#5B7083"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 1.5}
          d="M14.25 8.41v1.2c0 1.68 0 2.52-.327 3.161a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-3.9c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.31C.75 12.128.75 11.288.75 9.608v-1.2M4.5 3.801a15.246 15.246 0 0 1 2.557-2.73A.69.69 0 0 1 7.5.91m0 0a.69.69 0 0 1 .443.162 15.28 15.28 0 0 1 2.557 2.73M7.5.91v9.75"
        />
      </svg>
    </>
  );
};

export const QuackIconLogout = ({
  width,
  height,
  fill,
  strokeColor,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 18}
        height={height || 18}
        fill={fill || "none"}
        viewBox="0 0 24 24"
      >
        <path
          stroke={strokeColor || "#5B7083"}
          stroke-linecap={strokeLinecap || "round"}
          stroke-linejoin={strokeLinejoin || "round"}
          stroke-width={strokeWidth || 1.5}
          d="M3.81153 7.65918C2.82454 8.39942 1.93322 9.25817 1.15739 10.2156C1.05246 10.3451 1 10.5021 1 10.6592M3.81153 13.6592C2.82454 12.9189 1.93322 12.0602 1.15739 11.1028C1.05246 10.9733 1 10.8162 1 10.6592M1 10.6592H14M9 3.18697C10.0615 2.23689 11.4633 1.65918 13 1.65918C16.3137 1.65918 19 4.34547 19 7.65918V13.6592C19 16.9729 16.3137 19.6592 13 19.6592C11.4633 19.6592 10.0615 19.0815 9 18.1314"
        />
      </svg>
    </>
  );
};
