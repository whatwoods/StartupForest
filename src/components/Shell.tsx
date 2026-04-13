import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { navItems } from '../data';
import { Button } from './ui/Button';

export function Shell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-[color:var(--text)]">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
        className="pointer-events-none fixed left-[-10rem] top-[8rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[rgba(188,240,174,0.6)] blur-[100px]"
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        className="pointer-events-none fixed right-[-12rem] top-[16rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[rgba(20,113,230,0.2)] blur-[100px]"
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
      />

      <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--bg)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-[var(--container)] items-center justify-between px-4 sm:px-6">
          <NavLink className="text-xl font-bold tracking-tight text-[color:var(--primary)]" to="/">
            创业森林
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[color:var(--surface-soft)] text-[color:var(--primary)]'
                      : 'text-[color:var(--muted)] hover:text-[color:var(--primary)]',
                  ].join(' ')
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/events">
              <Button size="small" variant="ghost">
                获取周报
              </Button>
            </Link>
            <Link to="/apply">
              <Button size="small">开启成长</Button>
            </Link>
            <button
              aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
              className="theme-toggle"
              onClick={toggleTheme}
              title={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
              type="button"
            >
              <span aria-hidden="true" className="theme-toggle-icon">
                {theme === 'light' ? '◐' : '☀'}
              </span>
            </button>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label="打开导航菜单"
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              className="block h-[2px] w-6 bg-current"
            />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block h-[2px] w-6 bg-current" />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              className="block h-[2px] w-6 bg-current"
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              animate={{ height: 'auto', opacity: 1 }}
              className="overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--surface)] md:hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
            >
              <nav className="flex flex-col gap-2 p-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      [
                        'rounded-md p-3 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-[color:var(--surface-soft)] text-[color:var(--primary)]'
                          : 'text-[color:var(--muted)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--primary)]',
                      ].join(' ')
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-4 flex flex-col gap-3 border-t border-[color:var(--line)] pt-4">
                  <button
                    aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
                    className="theme-toggle mobile"
                    onClick={toggleTheme}
                    title={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
                    type="button"
                  >
                    <span aria-hidden="true" className="theme-toggle-icon">
                      {theme === 'light' ? '◐' : '☀'}
                    </span>
                    <span>{theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}</span>
                  </button>
                  <Link to="/events">
                    <Button className="w-full" variant="secondary">
                      查看最新活动
                    </Button>
                  </Link>
                  <Link to="/apply">
                    <Button className="w-full">提交组织申请</Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
          exit={{ opacity: 0, y: -15 }}
          initial={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="mt-auto border-t border-[color:var(--line)] bg-[color:var(--surface)] py-12 text-sm text-[color:var(--muted)]">
        <div className="mx-auto grid w-[var(--container)] grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-4">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">Digital Arboretum</p>
            <h3 className="text-xl font-bold text-[color:var(--text)]">创业森林</h3>
            <p className="leading-relaxed">
              连接活动组织、项目提报、投票展示与历届成果归档，让创业生态从单场活动变成持续运转的系统。
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-[color:var(--text)]">平台入口</h4>
            <ul className="space-y-2">
              <li>
                <Link className="transition-colors hover:text-[color:var(--primary)]" to="/">
                  首页
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-[color:var(--primary)]" to="/events">
                  活动列表
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-[color:var(--primary)]" to="/me">
                  用户中心
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-[color:var(--text)]">组织支持</h4>
            <ul className="space-y-2">
              <li>
                <Link className="transition-colors hover:text-[color:var(--primary)]" to="/apply">
                  申请组织者
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-[color:var(--primary)]" to="/admin">
                  组织者后台
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-[color:var(--text)]">订阅动态</h4>
            <p className="leading-relaxed">每周推送最新报名窗口、项目入选结果与活动回顾。</p>
            <div className="flex gap-2">
              <input
                aria-label="邮箱"
                className="flex-1 rounded-md border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-3 py-2 text-sm outline-none focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)]"
                placeholder="你的邮箱地址"
              />
              <Button size="small">订阅</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
