const width = 40;
const height = 40;
const fixCentering = `translate(${-width / 2},${-height / 2})`;

export const Sun = ({ color }) => (
  <g fill={color} transform={fixCentering}>
    <path d="M6.02547 23.1915L0.499998 20.7658C0.199219 20.6329 0 20.3341 0 20.0002C0 19.6662 0.199219 19.3674 0.499998 19.2326L6.02547 16.8068C6.28328 16.6994 6.57432 16.7247 6.81647 16.8751C7.04888 17.0333 7.19146 17.2912 7.19146 17.5743V22.4239C7.19146 22.7071 7.04888 22.9649 6.81647 23.1231C6.67389 23.2149 6.51569 23.2559 6.35748 23.2559C6.24225 23.2579 6.12506 23.2325 6.02545 23.1915L6.02547 23.1915Z" />
    <path d="M27.3418 9.22459C27.1426 9.02537 27.0586 8.74218 27.1172 8.4668C27.1758 8.19141 27.3672 7.9668 27.6348 7.8594L33.2518 5.67581C33.5603 5.55081 33.9099 5.62503 34.1443 5.8594C34.3768 6.09182 34.4529 6.4434 34.3358 6.752L32.1444 12.369C32.0448 12.6366 31.8104 12.828 31.537 12.8866C31.4784 12.8944 31.4295 12.9041 31.371 12.9041C31.1463 12.9041 30.9374 12.8202 30.7792 12.662L27.3418 9.22459Z" />
    <path d="M16.8749 6.80867C16.7245 6.57625 16.6991 6.27547 16.8085 6.02547L19.242 0.499998C19.3749 0.191404 19.6659 0 19.9998 0C20.3338 0 20.6326 0.191404 20.7674 0.499998L23.1932 6.02547C23.3006 6.27547 23.2772 6.57627 23.1268 6.80867C22.9764 7.05085 22.7108 7.19147 22.4276 7.19147H17.578C17.2909 7.19147 17.0331 7.05085 16.8749 6.80867H16.8749Z" />
    <path d="M23.1248 33.1915C23.2752 33.4239 23.3006 33.7247 23.1912 33.9825L20.7654 39.5C20.6326 39.8086 20.3338 40 19.9998 40C19.6659 40 19.3748 39.8086 19.242 39.5L16.8085 33.9825C16.6991 33.7247 16.7245 33.4259 16.8749 33.1915C17.0331 32.9493 17.2909 32.8087 17.5741 32.8087H22.4236C22.7088 32.8087 22.9744 32.9493 23.1248 33.1915H23.1248Z" />
    <path d="M12.6579 30.7755C12.8571 30.9747 12.9411 31.2579 12.8825 31.5333C12.8239 31.8087 12.6325 32.0411 12.3747 32.1407L6.74974 34.3321C6.65013 34.3653 6.55052 34.3829 6.44896 34.3829C6.23216 34.3829 6.01536 34.2989 5.85716 34.1407C5.62474 33.9083 5.54857 33.5567 5.67357 33.2481L7.85715 27.6311C7.96457 27.3635 8.19114 27.1721 8.46455 27.1135C8.73994 27.0549 9.02315 27.1389 9.22235 27.3381L12.6579 30.7755Z" />
    <path d="M5.67593 6.75012C5.55093 6.44153 5.62515 6.09192 5.85953 5.85753C6.09195 5.62511 6.44352 5.54893 6.75212 5.67393L12.3771 7.85752C12.6349 7.96494 12.8263 8.1915 12.8849 8.46492C12.9435 8.74031 12.8595 9.02351 12.6603 9.22271L9.2267 12.6563C9.0685 12.8145 8.85951 12.8985 8.6427 12.8985C8.58411 12.8985 8.52551 12.8907 8.46692 12.8809C8.19154 12.8223 7.96693 12.6309 7.85953 12.3633L5.67593 6.75012Z" />
    <path d="M19.9999 8.25012C13.5254 8.25012 8.25793 13.5256 8.25793 20.0001C8.25793 26.4745 13.5254 31.75 19.9999 31.75C26.4743 31.75 31.7498 26.4745 31.7498 20.0001C31.7498 13.5256 26.4743 8.25012 19.9999 8.25012ZM19.9999 13.2501C16.2831 13.2501 13.2579 16.2833 13.2579 20.0001C13.2579 20.459 12.8829 20.8341 12.4239 20.8341C11.9571 20.8341 11.5899 20.4591 11.5899 20.0001C11.5899 15.3575 15.3575 11.5841 19.9979 11.5841C20.4569 11.5841 20.8319 11.9591 20.8319 12.4181C20.8338 12.8829 20.4588 13.2501 19.9998 13.2501L19.9999 13.2501Z" />
    <path d="M34.3338 33.25C34.451 33.5586 34.3748 33.9082 34.1424 34.1426C33.9842 34.3008 33.7752 34.3848 33.5506 34.3848C33.451 34.3848 33.3514 34.3672 33.2498 34.334L27.6328 32.1426C27.3652 32.043 27.1738 31.8087 27.1152 31.5352C27.0566 31.2599 27.1406 30.9766 27.3398 30.7774L30.7734 27.3439C30.9726 27.1446 31.2558 27.0607 31.5312 27.1193C31.8066 27.1779 32.039 27.3693 32.1386 27.6369L34.3338 33.25Z" />
    <path d="M39.9998 20.0001C39.9998 20.3341 39.8084 20.6329 39.4998 20.7677L33.9823 23.1935C33.8749 23.2345 33.7577 23.2599 33.6405 23.2599C33.4823 23.2599 33.3241 23.2189 33.1913 23.1271C32.9491 22.9689 32.8085 22.7111 32.8085 22.4279V17.5783C32.8085 17.2951 32.9511 17.0373 33.1913 16.8791C33.4237 16.7287 33.7245 16.7034 33.9823 16.8127L39.4997 19.2385C39.8083 19.3674 39.9997 19.6662 39.9997 20.0002L39.9998 20.0001Z" />
  </g>
);
