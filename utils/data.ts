import bcrypt from 'bcryptjs';
import { UserRole } from '../model/User';

const data: any = {
    users: [
        {
            name: 'John',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            role: UserRole.ADMIN,
            avatar: '/images/avatars/admin.png'
        },
        {
            name: 'Jack',
            email: 'moderator@example.com',
            password: bcrypt.hashSync('123456'),
            role: UserRole.MODERATOR,
            avatar: '/images/avatars/moderator.png'
        },
        {
            name: 'Jane',
            email: 'guest@example.com',
            password: bcrypt.hashSync('123456'),
            role: UserRole.MODERATOR,
            avatar: '/images/avatars/guest.png'
        },
    ],
    blogPosts: [
        {
            title: 'My first blog post',
            subtitle: 'Why I start with all this...',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare aliquam tortor, at dictum nisl volutpat a. Sed laoreet accumsan mi vitae ultricies. Nulla quis ultrices elit, ut tempor magna. Vestibulum suscipit, turpis sit amet consequat tincidunt, nulla risus volutpat turpis, et viverra leo risus vel arcu. Mauris elementum ultrices nibh ac consectetur. Quisque tempor porttitor tortor, non blandit nunc sodales non. Morbi efficitur, quam id sollicitudin placerat, tortor velit sagittis libero, ut sagittis ante ante ac nisl.',
            image: '/images/posts/1.jpg'
        },
        {
            title: 'Who am I',
            subtitle: 'Let me indroduce you',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare aliquam tortor, at dictum nisl volutpat a. Sed laoreet accumsan mi vitae ultricies. Nulla quis ultrices elit, ut tempor magna. Vestibulum suscipit, turpis sit amet consequat tincidunt, nulla risus volutpat turpis, et viverra leo risus vel arcu. Mauris elementum ultrices nibh ac consectetur. Quisque tempor porttitor tortor, non blandit nunc sodales non. Morbi efficitur, quam id sollicitudin placerat, tortor velit sagittis libero, ut sagittis ante ante ac nisl.',
            image: '/images/posts/2.jpg'
        },
        {
            title: 'Random title',
            subtitle: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare aliquam tortor, at dictum nisl volutpat a. Sed laoreet accumsan mi vitae ultricies. Nulla quis ultrices elit, ut tempor magna. Vestibulum suscipit, turpis sit amet consequat tincidunt, nulla risus volutpat turpis, et viverra leo risus vel arcu. Mauris elementum ultrices nibh ac consectetur. Quisque tempor porttitor tortor, non blandit nunc sodales non. Morbi efficitur, quam id sollicitudin placerat, tortor velit sagittis libero, ut sagittis ante ante ac nisl.',
            image: '/images/posts/3.jpg'
        },
        {
            title: 'Anathor random title',
            subtitle: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare aliquam tortor, at dictum nisl volutpat a. Sed laoreet accumsan mi vitae ultricies. Nulla quis ultrices elit, ut tempor magna. Vestibulum suscipit, turpis sit amet consequat tincidunt, nulla risus volutpat turpis, et viverra leo risus vel arcu. Mauris elementum ultrices nibh ac consectetur. Quisque tempor porttitor tortor, non blandit nunc sodales non. Morbi efficitur, quam id sollicitudin placerat, tortor velit sagittis libero, ut sagittis ante ante ac nisl.',
            image: '/images/posts/4.jpg'
        }
    ],
    comments: []
}

export default data;