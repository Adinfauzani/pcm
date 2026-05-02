<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Event;
use App\Models\Member;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $roles = ['super_admin', 'admin_cabang', 'editor', 'viewer'];

        foreach ($roles as $roleName) {
            Role::create(['name' => $roleName, 'guard_name' => 'web']);
        }

        $permissions = [
            'manage_posts', 'manage_events', 'manage_galleries', 'manage_members',
            'manage_donations', 'manage_users', 'manage_settings', 'view_reports',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission, 'guard_name' => 'web']);
        }

        // Admin User
        $admin = User::create([
            'name' => 'Admin PCM',
            'email' => 'admin@pcmgunungputri.org',
            'password' => Hash::make('password123'),
            'is_active' => true,
        ]);
        $admin->assignRole('super_admin');

        // Editor User
        $editor = User::create([
            'name' => 'Editor PCM',
            'email' => 'editor@pcmgunungputri.org',
            'password' => Hash::make('password123'),
            'is_active' => true,
        ]);
        $editor->assignRole('editor');

        // Categories
        $categories = [
            ['name' => 'Berita Utama', 'slug' => 'berita-utama', 'type' => 'post'],
            ['name' => 'Pengumuman', 'slug' => 'pengumuman', 'type' => 'post'],
            ['name' => 'Artikel', 'slug' => 'artikel', 'type' => 'post'],
            ['name' => 'Event', 'slug' => 'event', 'type' => 'event'],
        ];

        foreach ($categories as $cat) {
            Category::create($cat);
        }

        $catBerita = Category::where('slug', 'berita-utama')->first();
        $catEvent = Category::where('slug', 'event')->first();

        // Sample Posts with Lorem Ipsum
        $posts = [
            [
                'title' => 'Lorem ipsum dolor sit amet',
                'slug' => 'lorem-ipsum-dolor-sit-amet',
                'content' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                'excerpt' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'status' => 'published',
                'is_featured' => true,
                'category_id' => $catBerita->id,
            ],
            [
                'title' => 'Sed ut perspiciatis unde omnis',
                'slug' => 'sed-ut-perspiciatis-unde-omnis',
                'content' => "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                'excerpt' => 'Sed ut perspiciatis unde omnis iste natus error.',
                'status' => 'published',
                'category_id' => $catBerita->id,
            ],
            [
                'title' => 'At vero eos et accusamus',
                'slug' => 'at-vero-eos-et-accusamus',
                'content' => "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.\n\nSimilique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
                'excerpt' => 'At vero eos et accusamus et iusto odio.',
                'status' => 'published',
                'category_id' => $catBerita->id,
            ],
            [
                'title' => 'Temporibus autem quibusdam',
                'slug' => 'temporibus-autem-quibusdam',
                'content' => "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.\n\nItaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
                'excerpt' => 'Temporibus autem quibusdam et aut officiis.',
                'status' => 'published',
                'category_id' => $catBerita->id,
            ],
        ];

        foreach ($posts as $postData) {
            $post = Post::create(array_merge($postData, [
                'author_id' => $admin->id,
                'published_at' => now(),
            ]));
        }

        // Sample Events with Lorem Ipsum
        $events = [
            [
                'title' => 'Annual Meeting 2026',
                'slug' => 'annual-meeting-2026',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Annual meeting ini akan membahas rencana kerja tahunan.',
                'start_date' => now()->addDays(7),
                'end_date' => now()->addDays(7)->addHours(4),
                'location' => 'Masjid Al-Muhajirin',
                'status' => 'upcoming',
                'category_id' => $catEvent->id,
            ],
            [
                'title' => 'Workshop Pendidikan Islam',
                'slug' => 'workshop-pendidikan-islam',
                'description' => 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Workshop ini untuk meningkatkan kualitas pendidikan agama.',
                'start_date' => now()->addDays(14),
                'end_date' => now()->addDays(14)->addHours(6),
                'location' => 'Kantor PCM',
                'status' => 'upcoming',
                'category_id' => $catEvent->id,
            ],
            [
                'title' => 'Bakti Sosial 2026',
                'slug' => 'bakti-sosial-2026',
                'description' => 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. Program bakti sosial untuk membantu masyarakat sekitar.',
                'start_date' => now()->subDays(2),
                'end_date' => now()->subDays(2)->addHours(8),
                'location' => 'Lapangan Desa',
                'status' => 'finished',
                'category_id' => $catEvent->id,
            ],
        ];

        foreach ($events as $eventData) {
            Event::create(array_merge($eventData, [
                'organizer_id' => $admin->id,
            ]));
        }

        // Sample Members
        $members = [
            ['name' => 'Ahmad Fauzi', 'position' => 'Ketua', 'position_level' => 1, 'is_active' => true],
            ['name' => 'Budi Santoso', 'position' => 'Wakil Ketua', 'position_level' => 2, 'is_active' => true],
            ['name' => 'Citra Dewi', 'position' => 'Sekretaris', 'position_level' => 3, 'is_active' => true],
            ['name' => 'Dedi Kurniawan', 'position' => 'Bendahara', 'position_level' => 3, 'is_active' => true],
            ['name' => 'Eko Prasetyo', 'position' => 'Anggota', 'position_level' => 4, 'is_active' => true],
        ];

        foreach ($members as $memberData) {
            Member::create($memberData);
        }
    }
}
