import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Avatar
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { HiShoppingCart ,HiSearch ,HiPencil} from "react-icons/hi";

  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 4 }}
          px={{ base: 14 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={4} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
             <Image src='..\public\shopkaro-logo.png' alt='logo' />
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
            cursor={'pointer'}>
                
                <Stack display="flex" gap="20px" direction={'row'}>
                  <HiPencil size={27} />
                  <HiSearch size={27} />
                  <HiShoppingCart size={27} />
                </Stack>
                <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                border="none"
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
              </MenuList>
            </Menu>
             
            {/* <Button
             as={'a'}
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             fontWeight={600}
             color={'white'}
             bg={'pink.400'}
             href={'#'}
             _hover={{
               bg: 'pink.300',
             }}>
              Sign In
            </Button> */}
            {/* <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button> */}

          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav  key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Heading
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}
              fontSize={18}
              textAlign="left">
              {label}
            </Heading>
            {subLabel && subLabel.map((childs)=>(
                <Text fontSize={15}>{childs}</Text>
            ))}
            
          </Box>
          {/* <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex> */}
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: Array<string>;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'WOMEN',
      children: [
        {
          label: 'Ethnic Wear',
          subLabel: ['Kurta Kurtis',"Sarees","Lehengas","Leggings, Salwar & Churidaar"],
          href: '#',
        },
        {
          label: 'Bags & Wallets',
          subLabel: [],
          href: '#',
        },
        {
          label: 'Jewellery',
          subLabel: ['Fashion Jewellery',"Earrings","Necklace & Pendants",
          "Rings, Bangles & Bracelets"],
          href: '#',
        },
      ],
    },
    {
      label: 'MEN',
      children: [
        {
          label: 'Top Wear',
          subLabel: ['T-Shirts',"Casual Shirts","Formal Shirts","Suits & Blazers"],
          href: '#',
        },
        {
          label: 'Bottom Wear',
          subLabel: ['Jeans',"Casual Trousers","Formal Trousers","Joggers Shorts"],
          href: '#',
        },
        {
          label: 'Sports Wear',
          subLabel: ['T-Shirts',"Track Pants"],
          href: '#',
        },
      ],
    },
    {
        label: 'KIDS',
        children: [
          {
            label: 'Boys',
            subLabel: ['T-Shirts',"Shirts","Bottom Wear","Sweater & Cardigans"],
            href: '#',
          },
          {
            label: 'Girls',
            subLabel: ['Dresses & Frocks',"Tees & Tops","Bottom Wear","Coats & Jackets"],
            href: '#',
          },
          {
            label: 'Footwear',
            subLabel: ['Sandals & Floaters',"Slippers & Flip Flops"],
            href: '#',
          },
        ],
    },
    {
        label: 'HOME',
        children: [
          {
            label: 'Bed Linen & Furnishing',
            subLabel: ['Bed Sheet Sets',"Quilts & Comforters","Blankets","Pillow Covers"],
            href: '#',
          },
          {
            label: 'Bath',
            subLabel: ['Towels',"Bath Mats","Shower Curtains"],
            href: '#',
          },
          {
            label: 'Brands',
            subLabel: ['Bella Casa',"Cortina","Saral Home","Saral Home"],
            href: '#',
          },
        ],
    },
    {
        label: 'OFFERS',
    },
  ];